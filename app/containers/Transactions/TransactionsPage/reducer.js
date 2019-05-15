/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import * as actionTypes from '../../../constants/actionType';

export const initialState = {
  error: null,
  transactionStats: [],
  transactions: {
    data: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const transactionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FAILED_FETCHING_TRANSACTION_STATS:
        draft.error = action.error;
        break;
      case actionTypes.SUCCESS_FETCHING_TRANSACTION_STATS:
        draft.transactionStats = action.response.transactionStats;
        break;
      case actionTypes.SUCCESS_FETCHING_TRANSACTIONS:
        draft.transactions = action.response.transactions;
        break;
    }
  });

export default transactionReducer;
