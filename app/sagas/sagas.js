import { call, put, all } from 'redux-saga/effects';

import * as ActionTypes from '../constants/actionType';

import {
  fetchConnectorsService,
  fetchBankAccountsService,
  fetchPaymentMethodsService,
  fetchProductsService,
  fetchTaxCodeService,
  fetchTransactionStatsService,
  fetchTransactionsService,
  fetchAccountsService,
} from '../services/api';

export function* onBoarding() {
  return null;
}

export function* fetchConnectorsSaga() {
  try {
    yield put({ type: ActionTypes.FETCHING_CONNECTORS });
    const { error, ...response } = yield call(fetchConnectorsService);
    if (error) {
      yield put({ type: ActionTypes.FAILED_FETCHING_CONNECTORS, error });
    } else {
      yield put({ type: ActionTypes.SUCCESS_FETCHING_CONNECTORS, response });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FAILED_FETCHING_CONNECTORS, error });
  }
}

export function* fetchPreferencesSaga() {
  try {
    yield put({ type: ActionTypes.FETCHING_PREFERENCES });
    const { error, ...response } = yield all([
      call(fetchBankAccountsService),
      call(fetchPaymentMethodsService),
      call(fetchProductsService),
      call(fetchTaxCodeService),
    ]);
    if (error) {
      yield put({ type: ActionTypes.FAILED_FETCHING_PREFERENCES, error });
    } else {
      yield put({ type: ActionTypes.SUCCESS_FETCHING_PREFERENCES, response });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FAILED_FETCHING_PREFERENCES, error });
  }
}

export function* fetchTransactionStatsSaga() {
  try {
    yield put({ type: ActionTypes.FETCHING_TRANSACTION_STATS });
    const { error, ...response } = yield call(fetchTransactionStatsService);
    if (error) {
      yield put({ type: ActionTypes.FAILED_FETCHING_TRANSACTION_STATS, error });
    } else {
      yield put({
        type: ActionTypes.SUCCESS_FETCHING_TRANSACTION_STATS,
        response,
      });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FAILED_FETCHING_TRANSACTION_STATS, error });
  }
}

export function* fetchTransactionsSaga() {
  try {
    yield put({ type: ActionTypes.FETCHING_TRANSACTIONS });
    const { error, ...response } = yield call(fetchTransactionsService);
    if (error) {
      yield put({ type: ActionTypes.FAILED_FETCHING_TRANSACTIONS, error });
    } else {
      yield put({ type: ActionTypes.SUCCESS_FETCHING_TRANSACTIONS, response });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FAILED_FETCHING_TRANSACTIONS, error });
  }
}

export function* fetchAccountsSaga() {
  try {
    yield put({ type: ActionTypes.FETCHING_ACCOUNTS });
    const { error, ...response } = yield call(fetchAccountsService);
    if (error) {
      yield put({ type: ActionTypes.FAILED_FETCHING_ACCOUNTS, error });
    } else {
      yield put({ type: ActionTypes.SUCCESS_FETCHING_ACCOUNTS, response });
    }
  } catch (error) {
    yield put({ type: ActionTypes.FAILED_FETCHING_ACCOUNTS, error });
  }
}
