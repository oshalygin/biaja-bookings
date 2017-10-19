import Location from './models/location';

async function findOneAndUpdate(model) {
  const locationModel = {
    city: model.city,
    state: model.state,
    country: model.country,
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
