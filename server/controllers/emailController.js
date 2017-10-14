import emailService from '../services/emailService';

export async function get(request, response) {
  const yelpBusiness = await emailService.persistEmailForEvents();

  return response.status(200).json(yelpBusiness);
}

const emailController = {
  get,
};

export default emailController;
