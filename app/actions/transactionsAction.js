import * as ActionTypes from '../constants/actionType';

export function fetchTransactionStats() {
  return {
    type: ActionTypes.FETCH_TRANSACTION_STATS,
  };
}

export function fetchTransactions() {
  return {
    type: ActionTypes.FETCH_TRANSACTIONS,
  };
}
