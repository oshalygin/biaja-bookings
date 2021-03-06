/* eslint-disable quotes */
import axios from 'axios';
import cheerio from 'cheerio';

import artists from '../dataAccess/artists';

async function scrapeArtistData(artist) {
  let performances = [];
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

    performances = [
      ...performances,
      {
        artist: artist.name,
        date,
        venue,
        city,
        state,
      },
    ];
  });

  return performances;
}

async function scrapeTourData() {
  const performances = artists.map(artist => scrapeArtistData(artist));
  const collectionOfTours = await Promise.all(performances);

  const tourData = collectionOfTours.reduce((previous, next) => {
    return [...previous, ...next];
  }, []);

  return tourData;
}

const tourService = {
  scrapeTourData,
};

export default tourService;
