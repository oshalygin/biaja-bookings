/* eslint-disable quotes */
import Crawler from 'crawler';
import shuffle from 'shuffle-array';

import artists from '../dataAccess/artists';
import secondaryArtists from '../dataAccess/secondaryArtists';
import yelpService from './yelpService';
import eventsDAL from '../dataAccess/eventsDAL';

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
            console.log(error); //eslint-disable-line no-console
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
  const shuffledSecondaryArtistCollection = shuffle(secondaryArtists, {
    copy: true,
  });

  const artistCollection = [...artists, ...shuffledSecondaryArtistCollection];

  const performances = artistCollection.map(artist =>
    hydrateArtistEvent(artist),
  );
  await Promise.all(performances);
}

async function hydrateArtistEvents() {
  const performances = artists.map(artist => hydrateArtistEvent(artist));
  const collectionOfEventPromises = await Promise.all(performances);

  const events = collectionOfEventPromises.reduce((previous, next) => {
    return [...previous, ...next];
  }, []);

  await yelpService.hydrateEventsWithYelpData(events);
}

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
  hydrateArtistEvents,
  getAllEvents,
  getEventsInUnitedStates,
  getEventsInUsByState,
  getEventsOverseas,
  hydrateArtistEventsIteratively,
};

export default eventService;
