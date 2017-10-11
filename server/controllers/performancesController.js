import { errorApiResponse } from '../utilities/requestUtilities';

export async function get(request, response) {
  const { query } = this.request;

  if (!query.city || !query.state) {
    return errorApiResponse(
      400,
      'Please provide a city and state as a queryString param',
    )(request, response);
  }

  // Make the necessary service calls and respond accordingly
  return response.status(200).json({});
}

const performanceController = {
  get,
};

export default performanceController;
