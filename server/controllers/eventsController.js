import eventService from '../services/eventService';

export async function get(request, response) {
  const { city, state } = request.query;
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
