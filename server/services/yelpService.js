/* eslint-disable camelcase */
/* eslint-disable no-console */
import R from 'ramda';
import axios from 'axios';
import cheerio from 'cheerio';
import { URLSearchParams } from 'url';
import configuration from '../utilities/configuration';
import emailService from './emailService';
import eventsDAL from '../dataAccess/eventsDAL';
import locationsDAL from '../dataAccess/locationsDAL';

const YELP_AUTH_ENDPOINT = 'https://api.yelp.com/oauth2/token';
const YELP_SEARCH_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';

// https://www.yelp.com/developers/documentation/v2/all_category_list
// const SEARCH_API_CATEGORIES = 'nightlife'; // 'nightlife' another alternative

async function auth() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', configuration.yelpClientId);
    params.append('client_secret', configuration.yelpClientSecret);

    const { data } = await axios.post(
      YELP_AUTH_ENDPOINT,
      params.toString(),
      config,
    );

    return data.access_token;
  } catch (error) {
    console.log(error);
    return {};
  }
}

async function getBusinessWebsite(url) {
  const { data } = await axios.get(url);

  const $ = cheerio.load(data); //eslint-disable-line id-length
  const locations = $('.biz-website');

  let website = null;
  //eslint-disable-next-line array-callback-return
  locations.map((index, element) => {
    website = $(element).find('a').text();
  });

  return website;
}

async function yelpVenue(accessToken, event) {
  try {
    let website = null;
    let contactEmails = null;

    const encodedVenue = encodeURIComponent(event.venue);
    const encodedLocation = event.state
      ? encodeURIComponent(`${event.city}, ${event.state}`)
      : encodeURIComponent(`${event.city}, ${event.country}`);

    const endpoint = `${YELP_SEARCH_ENDPOINT}?term=${encodedVenue}&location=${encodedLocation}`;
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const firstMatch = data.businesses.length ? data.businesses[0] : {};
    if (!firstMatch) {
      return {
        ...event,
        price: null,
        phone: null,
      };
    }

    if (firstMatch.url) {
      const url = firstMatch.url.split('?')[0];
      website = await getBusinessWebsite(url);
      website = website ? website.split('/')[0] : null;
    }

    if (website) {
      contactEmails = await emailService.getEmailContacts(website);
    }

    const updatedEvent = {
      ...event,
      website,
      contactEmails,
      price: firstMatch.price || null,
      phone: firstMatch.display_phone || null,
    };
    console.log(`saving venue: ${event.venue}`);
    await eventsDAL.findOneAndUpdate(updatedEvent);
    await locationsDAL.findOneAndUpdate(event);
    return true;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
    const updatedEvent = {
      ...event,
      contactEmails: null,
      price: null,
      phone: null,
      website: null,
    };
    console.log(`saving venue: ${event.venue}`);
    await eventsDAL.findOneAndUpdate(updatedEvent);
    await locationsDAL.findOneAndUpdate(event);
    return true;
  }
}

async function hydrateEventsWithYelpData(events, callback) {
  const accessToken = await auth();

  let eventsToProcess = events;

  const batchSize = configuration.hunterRequestBatchSize;

  while (eventsToProcess.length > 0) {
    const artist = eventsToProcess[0].artist;
    console.log(`[${artist}]: eventsToProcess:${eventsToProcess.length}`);
    const eventsToHydrate = R.take(batchSize, eventsToProcess);
    eventsToProcess = R.drop(batchSize, eventsToProcess);

    const hydratedEventPromises = eventsToHydrate.map(event =>
      yelpVenue(accessToken, event),
    );
    await Promise.all(hydratedEventPromises);
  }
  callback();
}

const hydrateEventWithYelpData = async (event, callback) => {
  const accessToken = await auth();
  await yelpVenue(accessToken, event);
  callback();
};

const yelpService = {
  auth,
  yelpVenue,
  hydrateEventsWithYelpData,
  hydrateEventWithYelpData,
};

export default yelpService;
