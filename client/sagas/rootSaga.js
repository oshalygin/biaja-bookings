import { fork, all } from 'redux-saga/effects';

import events from './eventSagas';

const sagas = [...events];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
