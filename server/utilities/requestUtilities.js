import logger from './logger';

export function getJsonHeaders() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export function getHeaders(token) {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
}

export function errorApiResponse(statusCode, message, error) {
  return function(request, response) {
    logger.error(statusCode, message, request);

    if (error) {
      logger.logApiError(error);
    }

    return response.status(statusCode).send(message);
  };
}

export function warningApiResponse(statusCode, message) {
  return function(request, response) {
    logger.warn(statusCode, message, request);

    return response.status(statusCode).send(message);
  };
}
