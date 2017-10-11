import { fork, all } from 'redux-saga/effects';

const sagas = [];

export default function* root() {
  yield all(sagas.map(saga => fork(saga)));
}
