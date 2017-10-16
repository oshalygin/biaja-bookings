/* eslint-disable indent */
import actionTypes from '../actions/actionTypes'; //eslint-disable-line no-unused-vars
import initialState from './initialState';

export default function itemReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.GET_LOGGED_IN_USER_SUCCESS: {
      return { ...action.data.user, token: action.data.token, loggedIn: true };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return {};
    }
    default: {
      return state;
    }
  }
}
