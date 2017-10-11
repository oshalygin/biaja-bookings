import eventService from '../services/eventService';

export async function get(request, response) {
  const { city, state } = request.query;
  
  const events = await eventService.getAllEvents();
  return response.status(200).json(events);
}

const eventsController = {
  get,
};

export default eventsController;
