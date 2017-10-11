/* eslint-disable quotes */
import axios from 'axios';
import cheerio from 'cheerio';

// pull from data
const artists = [
  { name: 'JaRule', url: 'http://bandsintown.com/JaRule' },
  { name: 'a Boogie', url: 'http://bandsintown.com/aBoogie' },
  { name: 'Fat Joe', url: 'http://bandsintown.com/FatJoe' },
  { name: 'Waka Flocka', url: 'http://bandsintown.com/WakaFlockaFlame' },
  { name: 'Asap Ferg', url: 'http://bandsintown.com/ASAPFerg' },
  { name: 'Shaggy', url: 'http://bandsintown.com/Shaggy' },
  { name: 'Ashanti', url: 'http://bandsintown.com/Ashanti' },
  { name: 'Young M.A', url: 'http://bandsintown.com/YoungM.A' },
  { name: 'Asap Rocky', url: 'http://bandsintown.com/ASAPRocky' },
  { name: 'Gucci Mane', url: 'http://bandsintown.com/GucciMane' },
  { name: 'Bow Wow', url: 'http://bandsintown.com/BowWow' },
  { name: 'Pusha T', url: 'http://bandsintown.com/PushaT' },
  { name: 'DMX', url: 'http://bandsintown.com/DMX' },
  { name: '21 Savage', url: 'http://bandsintown.com/21Savage' },
  { name: 'Ne-Yo', url: 'http://bandsintown.com/Ne-Yo' },
  { name: 'Wale', url: 'http://bandsintown.com/Wale' },
  { name: 'Sean Kingston', url: 'http://bandsintown.com/SeanKingston' },
  { name: 'Tyga', url: 'http://bandsintown.com/Tyga' },
  { name: 'The LOX', url: 'http://bandsintown.com/TheLOX' },
  { name: 'Ace Hood', url: 'http://bandsintown.com/AceHood' },
  { name: 'Method Man', url: 'http://bandsintown.com/MethodMan' },
  { name: 'Redman', url: 'http://bandsintown.com/Redman' },
  { name: 'Juelz Santana', url: 'http://bandsintown.com/JuelzSantana' },
  { name: 'Jim Jones', url: 'http://bandsintown.com/JimJones' },
  { name: 'Mase', url: 'http://bandsintown.com/Mase' },
  { name: 'Wyclef Jean', url: 'http://bandsintown.com/WyclefJean' },
  { name: 'Ryan Leslie', url: 'http://bandsintown.com/RyanLeslie' },
  { name: 'Fabolous', url: 'http://bandsintown.com/Fabolous' },
  { name: 'Raekwon', url: 'http://bandsintown.com/Raekwon' },
  { name: 'Jadakiss', url: 'http://bandsintown.com/Jadakiss' },
  { name: 'N.O.R.E.', url: 'http://bandsintown.com/N.O.R.E.' },
  { name: 'Lloyd', url: 'http://bandsintown.com/Lloyd' },
  { name: 'Rick Ross', url: 'http://bandsintown.com/RickRoss' },
  { name: 'DJ Khaled', url: 'http://bandsintown.com/DJKhaled' },
  { name: "Cam'ron", url: "http://bandsintown.com/Cam'ron" },
  {
    name: 'Chance The Rapper',
    url: 'http://bandsintown.com/ChancetheRapper',
  },
  { name: 'Migos', url: 'http://bandsintown.com/Migos' },
  { name: 'Lil Yachty', url: 'http://bandsintown.com/LilYachty' },
  { name: 'French Montana', url: 'http://bandsintown.com/FrenchMontana' },
  {
    name: 'Soulja Boy',
    url: "http://bandsintown.com/SouljaBoyTell'Em",
  },
];

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
