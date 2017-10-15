import actionTypes from './actionTypes';

export const retrieveEvents = data => ({
  type: actionTypes.RETRIEVE_EVENTS,
  data,
});

export const getEventsSuccess = data => ({
  type: actionTypes.GET_EVENTS_SUCCESS,
  data,
});

export const getEventsFailure = () => ({
  type: actionTypes.GET_EVENTS_FAILURE,
});

export const retrieveVenues = data => ({
  type: actionTypes.RETRIEVE_VENUES,
  data,
});

export const getVenuesSuccess = data => ({
  type: actionTypes.GET_VENUES_SUCCESS,
  data,
});

export const getVenuesFailure = () => ({
  type: actionTypes.GET_VENUES_FAILURE,
});

export const clearEvents = () => ({
  type: actionTypes.CLEAR_EVENTS,
});
