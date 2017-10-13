import emailService from '../services/emailService';

export async function get(request, response) {
  const { domain } = request.query;

  const yelpBusiness = await emailService.getEmailContacts(domain);

  return response.status(200).json(yelpBusiness);
}

const yelpController = {
  get,
};

export default yelpController;
