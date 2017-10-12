import { put, call, take, fork } from 'redux-saga/effects';
import api from '../utilities/api';
import actionTypes from '../actions/actionTypes';
import * as locationActions from '../actions/locationActions';

import { LOCATIONS_ENDPOINT } from '../utilities/endpoints';

export function* getEvents() {
  try {
    const response = yield call(api.get, LOCATIONS_ENDPOINT);
    yield put(locationActions.getLocationsSuccess(response.data));
  } catch (error) {
    yield put(locationActions.getLocationsFailure());
  }
}

/* WATCHERS */

export function* retrieveLocations() {
  while (true) {
    yield take(actionTypes.RETRIEVE_LOCATIONS);
    yield fork(getEvents);
  }
}

export default [retrieveLocations];
