/* eslint-disable quotes */
import axios from 'axios';
import cheerio from 'cheerio';

import artists from '../dataAccess/artists';
import db from '../dataAccess/database';

async function scrapeArtistData(artist) {
  let events = [];
  const { data } = await axios.get(artist.url);

  const $ = cheerio.load(data); //eslint-disable-line id-length
  const locations = $('tr.microformats');

  //eslint-disable-next-line array-callback-return
  locations.map((index, element) => {
    const date = $(element).find('meta').attr('content');
    const venue = $(element).find('.venue span[itemprop="name"]').text();
    const city = $(element)
      .find('.location span[itemprop="addressLocality"]')
      .text();
    const state = $(element)
      .find('.location span[itemprop="addressRegion"]')
      .text();

    events = [
      ...events,
      {
        dateAdded: new Date(),
        artist: artist.name,
        date,
        venue,
        city: state ? city : '',
        state,
        country: state ? 'United States' : city,
      },
    ];
  });

  return events;
}

async function scrapeTourData() {
  const performances = artists.map(artist => scrapeArtistData(artist));
  const collectionOfTours = await Promise.all(performances);

  const tourData = collectionOfTours.reduce((previous, next) => {
    return [...previous, ...next];
  }, []);

  return tourData;
}

async function hydrateEvent(event) {
  const eventCollection = db.collection('events');

  const snapshot = await eventCollection
    .where('artist', '==', event.artist)
    .where('date', '==', event.date)
    .get();

  if (snapshot.size) {
    return true;
  }

  await eventCollection.add(event);
  return true;
}

async function hydrateEvents() {
  const events = await scrapeTourData();
  const hydratedEvents = events.map(event => hydrateEvent(event));
  await Promise.all(hydratedEvents);
}

async function getAllEvents() {
  let data = [];

  const eventsCollection = db.collection('events');
  const snapshot = await eventsCollection.get();
  snapshot.forEach(document => {
    data = [...data, { ...document.data() }];
  });

  return data;
}

const eventService = {
  hydrateEvents,
  getAllEvents,
};

export default eventService;
