/* eslint-disable indent */
import initialState from './initialState';
import actionTypes from '../actions/actionTypes.js';

export default function eventReducer(
  state = initialState.locations,
  action,
) {
  switch (action.type) {
    case actionTypes.GET_LOCATIONS_SUCCESS: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}
