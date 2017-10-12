import { fork, all } from 'redux-saga/effects';

import events from './eventSagas';
import locations from './locationSagas';

const sagas = [...events, ...locations];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
