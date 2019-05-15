import { fork, all } from 'redux-saga/effects';

import {
  watchOnBoarding,
  watchFetchConnectors,
  watchFetchPreferences,
  watchFetchTransactionStats,
  watchFetchTransactions,
  watchFetchAccounts,
} from './watchers';

export default function* rootSaga() {
  yield all([
    fork(watchOnBoarding),
    fork(watchFetchConnectors),
    fork(watchFetchPreferences),
    fork(watchFetchTransactionStats),
    fork(watchFetchTransactions),
    fork(watchFetchAccounts),
  ]);
}
