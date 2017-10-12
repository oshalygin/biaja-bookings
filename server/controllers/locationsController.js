import R from 'ramda';

import eventService from '../services/eventService';

export async function get(request, response) {
  const events = await eventService.getAllEvents();

  const locations = R.compose(
    R.map(data => {
      return {
        city: data.city,
        state: data.state,
        country: data.country,
      };
    }),
    R.uniqBy(data => data.city),
    R.sortWith([R.ascend(R.prop('city'))]),
  )(events);

  const uniqueLocations = [...new Set([...locations])];
  return response.status(200).json(uniqueLocations);
}

const locationsController = {
  get,
};

export default locationsController;
