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
    default: {
      return state;
    }
  }
}
