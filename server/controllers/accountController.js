import authService from './authService';
import { authenticationToken } from '../middleware/authMiddleware';

export async function post(request, response) {
  const { email, password } = request.body;
  try {
    const jwtToken = await authService.login(email, password);
    response.cookie('access_token', jwtToken);
    return response.status(200).json({});
  } catch (error) {
    if (error.message) {
      return response.status(400).send(error.message);
    }
    return response.status(400).send('Bad Request');
  }
}

export async function get(request, response) {
  const token = request.cookies.access_token;
  const user = authenticationToken(token);
  // In the future build this out to pull from the DB.
  return response.status(200).json(user);
}

const accountController = {
  post,
  get,
};

export default accountController;
