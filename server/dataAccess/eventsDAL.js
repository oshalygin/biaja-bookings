import Event from './models/event';
import dateUtilities from '../../client/utilities/dateUtilities';

async function findOneAndUpdate(model) {
  const event = new Event({
    ...model,
  });

  await event.collection.findOneAndUpdate(
    {
      artist: model.artist,
      date: model.date,
    },
    {
      $set: {
        ...model,
        createdDate: new Date().valueOf(),
        eventType: 'Ticketed Concerts',
        dateMillis: new Date(event.date).valueOf(),
      },
    },
    {
      upsert: true,
      new: true,
    },
  );
}

async function find() {
  const events = await Event.find();
  return events;
}

async function findHistorical() {
  const events = await Event.find()
    .where('dateMillis')
    .lt(dateUtilities.historicalCutoffDate());

  return events;
}

async function findNotHistorical() {
  const events = await Event.find()
    .where('dateMillis')
    .gte(dateUtilities.historicalCutoffDate());

  return events;
}

const eventsDAL = {
  findOneAndUpdate,
  findHistorical,
  find,
  findNotHistorical,
};

export default eventsDAL;
