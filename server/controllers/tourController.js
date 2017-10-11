import R from 'ramda';

import { errorApiResponse } from '../utilities/requestUtilities';
import tourService from '../services/tourService';

export async function get(request, response) {
  // Check if the scrap request happened recently(<4 hours)

  // Call scrape service
  const tourData = await tourService.scrapeTourData();
  // const cities = tourData
  //   .sort((previous, next) => previous.state - next.state)
  //   .map(data => `${data.city}, ${data.state}`);

  const cities = R.compose(
    R.map(data => `${data.city}, ${data.state}`),
    R.sortWith([R.ascend(R.prop('state'))]),
  )(tourData);

  const uniqueCities = [...new Set([...cities])];
  return response.status(200).json(uniqueCities);
}

const tourController = {
  get,
};

export default tourController;
