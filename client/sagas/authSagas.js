import { put, call, take, fork } from 'redux-saga/effects';

import actionTypes from '../actions/actionTypes';
import * as userActions from '../actions/userActions';

import { getUserId, logoutUser } from '../utilities/accountUtilities';
import api from '../utilities/api';
import { ACCOUNT_ENDPOINT } from '../utilities/endpoints';

export function* clearUserSession() {
  yield call(logoutUser);
  yield put(userActions.logoutSuccess());
}

export function* getLoggedInUser() {
  try {
    const userId = yield call(getUserId);

    const endpoint = `${ACCOUNT_ENDPOINT}/${userId}`;
    const response = yield call(api.get, endpoint);
    yield put(userActions.loggedInUserSuccess(response.data));
  } catch (error) {
    if (error.response && error.response.status === 403) {
      yield put(userActions.forbiddenUser());
    } else {
      yield put(userActions.loggedInUserFailure());
    }
  }
}

/* WATCHERS */

export function* logout() {
  while (true) {
    yield take(actionTypes.TRIGGER_LOGOUT);
    yield fork(clearUserSession);
  }
}

export function* loggedInUser() {
  while (true) {
    yield take(actionTypes.REQUEST_LOGGED_IN_USER);
    yield fork(getLoggedInUser);
  }
}

export default [logout, loggedInUser];
