import eventService from '../services/eventService';

export async function get(request, response) {
  const events = await eventService.hydrateEvents();
  return response.status(200).json(events);
}

const cronEventsController = {
  get,
};

export default cronEventsController;
