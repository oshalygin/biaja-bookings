import { fork, all } from 'redux-saga/effects';

import auth from './authSagas';

const sagas = [...auth];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
