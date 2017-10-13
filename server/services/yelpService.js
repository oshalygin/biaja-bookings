/* eslint-disable camelcase */
/* eslint-disable no-console */
import axios from 'axios';
import cheerio from 'cheerio';
import { URLSearchParams } from 'url';
import configuration from '../utilities/configuration';

const YELP_AUTH_ENDPOINT = 'https://api.yelp.com/oauth2/token';
const YELP_SEARCH_ENDPOINT = 'https://api.yelp.com/v3/businesses/search';

// https://www.yelp.com/developers/documentation/v2/all_category_list
const SEARCH_API_CATEGORIES = 'nightlife'; // 'nightlife' another alternative

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

async function yelpVenue(venue, city, state) {
  try {
    const accessToken = await auth();

    const encodedVenue = encodeURIComponent(venue);
    const encodedLocation = state
      ? encodeURIComponent(`${city}, ${state}`)
      : encodeURIComponent(city);

    const endpoint = `${YELP_SEARCH_ENDPOINT}?categories=${SEARCH_API_CATEGORIES}&term=${encodedVenue}&location=${encodedLocation}`;
    const { data } = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const firstMatch = data.businesses.length ? data.businesses[0] : {};
    if (!firstMatch) {
      return {
        price: null,
        phone: null,
      };
    }
    const url = firstMatch.url.split('?')[0];
    const website = await getBusinessWebsite(url);

    return {
      website,
      price: firstMatch.price,
      phone: firstMatch.display_phone,
    };
  } catch (error) {
    console.log(error.response.data);
    return {};
  }
}

const yelpService = {
  auth,
  yelpVenue,
};

export default yelpService;
