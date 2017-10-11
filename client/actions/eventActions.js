import actionTypes from './actionTypes';

export const retrieveEvents = () => ({
  type: actionTypes.RETRIEVE_EVENTS,
});

export const getEventsSuccess = data => ({
  type: actionTypes.GET_EVENTS_SUCCESS,
  data,
});

export const getEventsFailure = () => ({
  type: actionTypes.GET_EVENTS_FAILURE,
});
