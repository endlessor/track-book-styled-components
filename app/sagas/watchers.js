import { takeLatest } from 'redux-saga/effects';

import {
  ON_BOARDING,
  FETCH_CONNECTORS,
  FETCH_PREFERENCES,
  FETCH_TRANSACTION_STATS,
  FETCH_TRANSACTIONS,
  FETCH_ACCOUNTS,
} from '../constants/actionType';

import {
  onBoarding,
  fetchConnectorsSaga,
  fetchPreferencesSaga,
  fetchTransactionStatsSaga,
  fetchTransactionsSaga,
  fetchAccountsSaga,
} from './sagas';

export function* watchOnBoarding() {
  yield takeLatest(ON_BOARDING, onBoarding);
}

export function* watchFetchConnectors() {
  yield takeLatest(FETCH_CONNECTORS, fetchConnectorsSaga);
}

export function* watchFetchPreferences() {
  yield takeLatest(FETCH_PREFERENCES, fetchPreferencesSaga);
}

export function* watchFetchTransactionStats() {
  yield takeLatest(FETCH_TRANSACTION_STATS, fetchTransactionStatsSaga);
}

export function* watchFetchTransactions() {
  yield takeLatest(FETCH_TRANSACTIONS, fetchTransactionsSaga);
}

export function* watchFetchAccounts() {
  yield takeLatest(FETCH_ACCOUNTS, fetchAccountsSaga);
}
