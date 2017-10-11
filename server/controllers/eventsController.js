import eventService from '../services/eventService';

export async function get(request, response) {
  const { city, state, country } = request.query;
  console.log(city, state, country);
  if (city && state) {
    const events = await eventService.getEventsInUnitedStates(city, state);
    return response.status(200).json(events);
  }

  if (city) {
    const events = await eventService.getEventsOverseas(city);
    return response.status(200).json(events);
  }

  const events = await eventService.getAllEvents();
  return response.status(200).json(events);
}

const eventsController = {
  get,
};

export default eventsController;
