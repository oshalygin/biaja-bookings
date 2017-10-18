import Event from './models/event';
import dateUtilities from '../utilities/dateUtilities';

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

async function findHistoricalEventsInUnitedStates(city, state) {
  const events = await Event.find({
    city,
    state,
  })
    .where('dateMillis')
    .lt(dateUtilities.historicalCutoffDate());

  return events;
}

async function findNonHistoricalEventsInUnitedStates(city, state) {
  const events = await Event.find({
    city,
    state,
  })
    .where('dateMillis')
    .gte(dateUtilities.historicalCutoffDate());

  return events;
}

async function findHistoricalEventsInState(state) {
  const events = await Event.find({
    state,
  })
    .where('dateMillis')
    .lt(dateUtilities.historicalCutoffDate());

  return events;
}

async function findNonHistoricalEventsInState(state) {
  const events = await Event.find({
    state,
  })
    .where('dateMillis')
    .gte(dateUtilities.historicalCutoffDate());

  return events;
}

async function findHistoricalEventsOverseas(city) {
  const events = await Event.find({
    city,
  })
    .where('dateMillis')
    .lt(dateUtilities.historicalCutoffDate());

  return events;
}

async function findNonHistoricalEventsOverseas(city) {
  const events = await Event.find({
    city,
  })
    .where('dateMillis')
    .gte(dateUtilities.historicalCutoffDate());

  return events;
}

const eventsDAL = {
  findOneAndUpdate,
  findHistorical,
  find,
  findNotHistorical,
  findHistoricalEventsInUnitedStates,
  findNonHistoricalEventsInUnitedStates,
  findHistoricalEventsInState,
  findNonHistoricalEventsInState,
  findHistoricalEventsOverseas,
  findNonHistoricalEventsOverseas,
};

export default eventsDAL;
