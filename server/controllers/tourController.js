import R from 'ramda';

import tourService from '../services/tourService';

export async function get(request, response) {
  const tourData = await tourService.scrapeTourData();

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
