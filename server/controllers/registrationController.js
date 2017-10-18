import authService from '../services/authService';

export async function post(request, response) {
  const { email, password, firstName, lastName } = request.body;
  try {
    const jwtToken = await authService.register(
      email,
      password,
      firstName,
      lastName,
    );
    response.cookie('access_token', jwtToken);
    return response.status(200).json({});
  } catch (error) {
    if (error.message) {
      return response.status(400).send(error.message);
    }
    return response.status(400).send('Bad Request');
  }
}

const registrationController = {
  post,
};

export default registrationController;
