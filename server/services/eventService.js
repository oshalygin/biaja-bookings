/* eslint-disable quotes */
import axios from 'axios';
import cheerio from 'cheerio';
import Crawler from 'crawler';

import artists from '../dataAccess/artists';
import secondaryArtists from '../dataAccess/secondaryArtists';
import db from '../dataAccess/database';
import yelpService from './yelpService';
import dateUtilities from '../utilities/dateUtilities';
import eventsDAL from '../dataAccess/eventsDAL';

const updatedQueryBasedOnHistoricalFlag = (query, historical) => {
  return historical
    ? query.where('dateMillis', '<', dateUtilities.historicalCutoffDate())
    : query.where('dateMillis', '>=', dateUtilities.historicalCutoffDate());
};

const crawler = new Crawler({
  rateLimit: 3000,
});

const hydrateArtistEvent = artist => {
  return new Promise((resolve, reject) => {
    crawler.queue([
      {
        uri: artist.url,
        jQuery: true,

        callback(error, res, done) {
          if (error) {
            console.log(error);
            reject(error);
          } else {
            let events = [];
            const $ = res.$; //eslint-disable-line id-length
            const locations = $('tr.microformats');

            //eslint-disable-next-line array-callback-return
            locations.map((index, element) => {
              const date = $(element).find('meta').attr('content');
              const venue = $(element)
                .find('.venue span[itemprop="name"]')
                .text();
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
                  city,
                  state,
                  country: state ? 'United States' : 'Overseas',
                },
              ];
            });
            yelpService.hydrateEventsWithYelpData(events, () =>
              resolve(events),
            );
          }
          done();
        },
      },
    ]);
  });
};

async function hydrateArtistEventsIteratively() {
  const artistCollection = [...secondaryArtists, ...artists];
  const performances = artistCollection.map(artist =>
    hydrateArtistEvent(artist),
  );
  await Promise.all(performances);

  // const events = collectionOfEventPromises.reduce((previous, next) => {
  //   return [...previous, ...next];
  // }, []);

  // await yelpService.hydrateEventsWithYelpData(events);
}

async function hydrateArtistEvents() {
  const performances = artists.map(artist => hydrateArtistEvent(artist));
  const collectionOfEventPromises = await Promise.all(performances);

  const events = collectionOfEventPromises.reduce((previous, next) => {
    return [...previous, ...next];
  }, []);

  await yelpService.hydrateEventsWithYelpData(events);
}

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
        city,
        state,
        country: state ? 'United States' : 'Overseas',
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

// async function hydrateEvent(event) {
//   const eventCollection = db.collection('events');

//   const snapshot = await eventCollection
//     .where('artist', '==', event.artist)
//     .where('date', '==', event.date)
//     .get();

//   if (snapshot.size) {
//     return true;
//   }

//   await eventCollection.add({
//     ...event,
//     eventType: 'Ticketed Concerts',
//     dateMillis: new Date(event.date).valueOf(),
//   });
//   return true;
// }

// async function hydrateEvents() {
//   const events = await scrapeTourData();

//   const updatedEvents = await yelpService.hydrateEventsWithYelpData(events);
//   const hydratedEvents = updatedEvents.map(event => hydrateEvent(event));
//   await Promise.all(hydratedEvents);
// }

async function getAllEvents(historical) {
  const data = historical
    ? await eventsDAL.findHistorical()
    : await eventsDAL.findNotHistorical();

  return data;
}

async function getEventsInUnitedStates(city, state, historical) {
  const data = historical
    ? await eventsDAL.findHistoricalEventsInUnitedStates(city, state)
    : await eventsDAL.findNonHistoricalEventsInUnitedStates(city, state);

  return data;
}

async function getEventsInUsByState(state, historical) {
  const data = historical
    ? await eventsDAL.findHistoricalEventsInState(state)
    : await eventsDAL.findNonHistoricalEventsInState(state);

  return data;
}

async function getEventsOverseas(city, historical) {
  const data = historical
    ? await eventsDAL.findHistoricalEventsOverseas(city)
    : await eventsDAL.findNonHistoricalEventsOverseas(city);

  return data;
}

const eventService = {
  // hydrateEvents,
  hydrateArtistEvents,
  getAllEvents,
  getEventsInUnitedStates,
  getEventsInUsByState,
  getEventsOverseas,
  hydrateArtistEventsIteratively,
};

export default eventService;
