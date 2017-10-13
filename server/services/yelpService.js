/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import cheerio from 'cheerio';
import { URLSearchParams } from 'url';
import configuration from '../utilities/configuration';
import emailService from './emailService';

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

    return updatedEvent;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
    return {
      ...event,
      contactEmails: null,
      price: null,
      phone: null,
      website: null,
    };
  }
}

async function hydrateEventsWithYelpData(events) {
  const accessToken = await auth();
  const hydratedEventPromises = events.map(event =>
    yelpVenue(accessToken, event),
  );

  const hydratedEvents = await Promise.all(hydratedEventPromises);
  return hydratedEvents;
}

const yelpService = {
  auth,
  yelpVenue,
  hydrateEventsWithYelpData,
};

export default yelpService;
