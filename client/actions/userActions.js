import actionTypes from './actionTypes';

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const logout = () => ({
  type: actionTypes.REQUEST_LOGOUT,
});

export const retrieveLoggedInUser = () => ({
  type: actionTypes.REQUEST_LOGGED_IN_USER,
});

export const userLogin = data => ({
  type: actionTypes.REQUEST_LOGIN,
  data,
});

export const userLoginValidationErrors = () => ({
  type: actionTypes.LOGIN_ERROR,
});

export const getLoggedInUserError = () => ({
  type: actionTypes.GET_LOGGED_IN_USER_ERROR,
});

export const getLoggedInUserSuccess = data => ({
  type: actionTypes.GET_LOGGED_IN_USER_SUCCESS,
  data,
});
