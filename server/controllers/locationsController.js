import R from 'ramda';

import eventService from '../services/eventService';

export async function get(request, response) {
  // Check if the scrap request happened recently(<4 hours)

  // Call scrape service
  const events = await eventService.getAllEvents();
  // const cities = tourData
  //   .sort((previous, next) => previous.state - next.state)
  //   .map(data => `${data.city}, ${data.state}`);

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
