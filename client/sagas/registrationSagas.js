import { put, call, take, fork } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';

import { registrationError } from '../actions/registrationActions';
import { retrieveLoggedInUser } from '../actions/userActions';
import { saveNotification } from '../actions/notificationActions';

import api from '../utilities/api';

import { REGISTRATION_ENDPOINT } from '../utilities/endpoints';
export function* register(registrationPostData) {
  try {
    yield call(api.post, REGISTRATION_ENDPOINT, registrationPostData);

    yield put(retrieveLoggedInUser());
  } catch (error) {
    yield put(registrationError());

    const message =
      error.response && error.response.data
        ? error.response.data
        : 'Could not register';

    yield put(saveNotification({ message }));
  }
}

/* WATCHERS */
export function* registerUser() {
  while (true) {
    const action = yield take(actionTypes.REQUEST_REGISTRATION);
    yield fork(register, action.data);
  }
}

export default [registerUser];
