import yelpService from '../services/yelpService';

export async function get(request, response) {
  const { venue, city, state } = request.query;

  const yelpBusiness = await yelpService.yelpVenue(venue, city, state);

  return response.status(200).json(yelpBusiness);
}

const yelpController = {
  get,
};

export default yelpController;
