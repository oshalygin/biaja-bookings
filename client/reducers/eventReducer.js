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
    case actionTypes.GET_VENUES_SUCCESS: {
      const events = action.data;
      // return R.sortWith([R.descend(R.prop('price'))], events);
      return R.compose(
        R.sortWith([R.descend(R.prop('price'))]),
        R.map(event => ({
          ...event,
          price: !event.price ? 0 : event.price.length,
        })),
      )(events);
    }
    case actionTypes.CLEAR_EVENTS: {
      return initialState.events;
    }
    default: {
      return state;
    }
  }
}
