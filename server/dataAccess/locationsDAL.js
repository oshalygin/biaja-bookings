import Location from './models/location';

async function findOneAndUpdate(model) {
  const locationModel = {
    city: model.city,
    state: model.state,
    country: model.country,
    level: model.level || 0,
  };

  const location = new Location({ ...locationModel });

  await location.collection.findOneAndUpdate(
    {
      city: model.city,
      state: model.state,
    },
    {
      $set: {
        ...locationModel,
        createdDate: new Date().valueOf(),
      },
    },
    {
      upsert: true,
      setDefaultsOnInsert: true,
      new: true,
    },
  );
}

async function find() {
  const locations = await Location.find();
  return locations;
}

const locationsDAL = {
  findOneAndUpdate,
  find,
};

export default locationsDAL;
