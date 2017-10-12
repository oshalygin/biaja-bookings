import { put, call, take, fork } from 'redux-saga/effects';
import api from '../utilities/api';
import actionTypes from '../actions/actionTypes';
import * as eventActions from '../actions/eventActions';

import { EVENTS_ENDPOINT } from '../utilities/endpoints';

export function* getEvents(data) {
  try {
    console.log(data);
    const response = yield call(api.get, EVENTS_ENDPOINT, { ...data });
    yield put(eventActions.getEventsSuccess(response.data));
  } catch (error) {
    yield put(eventActions.getEventsFailure());
  }
}

/* WATCHERS */

export function* retrieveEvents() {
  while (true) {
    const { data } = yield take(actionTypes.RETRIEVE_EVENTS);
    yield fork(getEvents, data);
  }
}

export default [retrieveEvents];
