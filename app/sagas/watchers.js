import { takeLatest } from 'redux-saga/effects';

import { ON_BOARDING } from '../constants/actionType';

import { onBoarding } from './sagas';

export function* watchOnBoarding() {
  yield takeLatest(ON_BOARDING, onBoarding);
}
