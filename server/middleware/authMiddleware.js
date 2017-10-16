import jwt from 'jsonwebtoken';

import configuration from '../utilities/configuration';

export function authenticationToken(cookie) {
  try {
    const token = jwt.verify(cookie, configuration.authSecret);
    return token;
  } catch (error) {
    return false;
  }
}

function authMiddleware() {
  return function(request, response, next) {
    const token = authenticationToken(request.cookies.access_token);

    if (!token) {
      return response.status(401).send('Unauthorized');
    }

    if (token.isVerified) {
      return next();
    }

    return response.status(403).send('Forbidden - Please check with your admin for access');
  };
}

export default authMiddleware;
