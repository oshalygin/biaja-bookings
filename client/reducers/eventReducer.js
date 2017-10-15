/* eslint-disable indent */
import R from 'ramda';
import initialState from './initialState';
import actionTypes from '../actions/actionTypes.js';

export default function eventReducer(state = initialState.events, action) {
  switch (action.type) {
    case actionTypes.GET_EVENTS_SUCCESS: {
      const events = action.data;
      return R.sortWith([R.ascend(R.prop('date'))], events);
    }
    case actionTypes.CLEAR_EVENTS: {
      return initialState.events;
    }
    default: {
      return state;
    }
  }
}
