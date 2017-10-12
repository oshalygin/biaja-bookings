import actionTypes from './actionTypes';

export const retrieveLocations = () => ({
  type: actionTypes.RETRIEVE_LOCATIONS,
});

export const getLocationsSuccess = data => ({
  type: actionTypes.GET_LOCATIONS_SUCCESS,
  data,
});

export const getLocationsFailure = () => ({
  type: actionTypes.GET_LOCATIONS_FAILURE,
});
