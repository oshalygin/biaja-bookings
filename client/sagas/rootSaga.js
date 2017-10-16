import { fork, all } from 'redux-saga/effects';

import events from './eventSagas';
import registration from './registrationSagas';
import notifications from './notificationSagas';
import locations from './locationSagas';

const sagas = [...events, ...locations, ...registration, ...notifications];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
