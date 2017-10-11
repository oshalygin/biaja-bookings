import db from '../dataAccess/database';
import artists from '../dataAccess/artists';

async function hydrateArtist(artist) {
  const artistsCollection = db.collection('artists');

  const snapshot = await artistsCollection
    .where('name', '==', artist.name)
    .get();

  if (snapshot.size) {
    return true;
  }

  await artistsCollection.add({
    dateAdded: new Date(),
    name: artist.name,
    url: artist.url,
  });

  return true;
}

async function hydrateArtists() {
  const hydratedArtists = artists.map(artist => hydrateArtist(artist));
  await Promise.all(hydratedArtists);
}

async function getArtists() {
  let data = [];

  const artistsCollection = db.collection('artists');
  const snapshot = await artistsCollection.get();
  snapshot.forEach(document => {
    const { name, url } = document.data();
    data = [...data, { id: document.id, name, url }];
  });

  return data;
}

const artistService = {
  getArtists,
  hydrateArtists,
};

export default artistService;
