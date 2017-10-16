/* eslint-disable indent */
import initialState from './initialState';
import actionTypes from '../actions/actionTypes.js';

export default function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case actionTypes.GET_EVENTS_SUCCESS: {
      return {
        ...action.state,
        events: false,
      };
    }
    case actionTypes.RETRIEVE_EVENTS: {
      return {
        ...action.state,
        events: true,
      };
    }
    case actionTypes.REQUEST_LOGGED_IN_USER: {
      return { ...state, loadingUser: true };
    }
    case actionTypes.GET_LOGGED_IN_USER_SUCCESS:
    case actionTypes.GET_LOGGED_IN_USER_ERROR: {
      return {
        ...state,
        loadingUser: false,
        loadingUserLogin: false,
        loadingRegistration: false,
      };
    }
    case actionTypes.LOADED_USER_SUCCESS: {
      return { ...state, loadingUser: false };
    }
    case actionTypes.LOADED_USER_FAILURE:
    case actionTypes.LOGOUT_SUCCESS: {
      return { ...state, loadingUser: false };
    }
    case actionTypes.REQUEST_LOGIN: {
      return { ...state, loadingUserLogin: true };
    }
    case actionTypes.LOGIN_ERROR: {
      return { ...state, loadingUserLogin: false };
    }
    case actionTypes.REQUEST_REGISTRATION: {
      return { ...state, loadingRegistration: true };
    }
    case actionTypes.REGISTRATION_ERROR: {
      return { ...state, loadingRegistration: false };
    }
    default: {
      return state;
    }
  }
}
