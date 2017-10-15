/* eslint-disable no-nested-ternary */
import eventService from '../services/eventService';

export async function get(request, response) {
  const { city, state, historical } = request.query;
  const historicalFlag =
    historical === 'false' ||
    historical === 'undefined' ||
    historical === 'null'
      ? false
      : historical === '' ? true : !!historical;

  if (city && state) {
    if (city.toLowerCase() === 'all') {
      const events = await eventService.getEventsInUsByState(
        state,
        historicalFlag,
      );
      return response.status(200).json(events);
    }

    const events = await eventService.getEventsInUnitedStates(
      city,
      state,
      historicalFlag,
    );
    return response.status(200).json(events);
  }

  if (city) {
    const events = await eventService.getEventsOverseas(city, historicalFlag);
    return response.status(200).json(events);
  }

  const events = await eventService.getAllEvents(historicalFlag);
  return response.status(200).json(events);
}

const eventsController = {
  get,
};

export default eventsController;
