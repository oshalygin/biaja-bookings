import { delay } from 'redux-saga';
import { put, take, takeLatest, fork } from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

import {
  removeNotificationsSuccess,
  saveNotificationSuccess,
} from '../actions/notificationActions';

export function* save(message) {
  yield put(saveNotificationSuccess({ message }));
}

export function* remove() {
  yield delay(1000);
  yield put(removeNotificationsSuccess());
}

/* WATCHERS */
export function* removeNotifications() {
  yield takeLatest(actionTypes.SAVE_NOTIFICATION, remove);
}

export function* saveNotification() {
  while (true) {
    const { data } = yield take(actionTypes.SAVE_NOTIFICATION);
    yield fork(save, data.message);
  }
}

export default [removeNotifications, saveNotification];
