import { fork, all } from 'redux-saga/effects';

import { watchOnBoarding } from './watchers';

export default function* rootSaga() {
  yield all([fork(watchOnBoarding)]);
}
