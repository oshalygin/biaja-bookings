import Artist from './models/artist';

async function findOneAndUpdate(model) {
  const artist = new Artist({
    ...model,
  });

  await artist.collection.findOneAndUpdate(
    {
      name: model.name,
    },
    {
      $set: {
        ...model,
        createdDate: new Date().valueOf(),
      },
    },
    {
      upsert: true,
      new: true,
    },
  );
}

async function find() {
  const artists = await Artist.find();
  return artists;
}

export default {
  findOneAndUpdate,
  find,
};
