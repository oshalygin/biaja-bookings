import { errorApiResponse } from '../utilities/requestUtilities';

export async function get(request, response) {
 // Check if the scrap request happened recently(<4 hours)
  
  // Call scrape service
  
  return response.status(200).json({});
}

const tourController = {
  get,
};

export default tourController;
