import eventService from '../services/eventService';

export async function get(request, response) {
  const { city, state, historical } = request.query;
  if (city && state) {
    if (city.toLowerCase() === 'all') {
      const events = await eventService.getEventsInUsByState(state, historical);
      return response.status(200).json(events);
    }

    const events = await eventService.getEventsInUnitedStates(
      city,
      state,
      historical,
    );
    return response.status(200).json(events);
  }

  if (city) {
    const events = await eventService.getEventsOverseas(city, historical);
    return response.status(200).json(events);
  }

  const events = await eventService.getAllEvents(historical);
  return response.status(200).json(events);
}

const eventsController = {
  get,
};

export default eventsController;
