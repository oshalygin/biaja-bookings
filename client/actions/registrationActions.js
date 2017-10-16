import actionTypes from './actionTypes';

export const triggerRegistration = data => ({
  type: actionTypes.REQUEST_REGISTRATION,
  data,
});

export const registrationError = () => ({
  type: actionTypes.REGISTRATION_ERROR,
});
