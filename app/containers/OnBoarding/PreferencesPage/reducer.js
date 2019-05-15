/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import * as actionTypes from '../../../constants/actionType';

export const initialState = {
  bankAccounts: [],
  products: [],
  paymentMethods: [],
  taxCodes: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const preferencesReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FAILED_FETCHING_PREFERENCES:
        draft.error = action.error;
        break;
      case actionTypes.SUCCESS_FETCHING_PREFERENCES:
        draft.bankAccounts = action.response[0].bankAccounts;
        draft.paymentMethods = action.response[1].paymentMethods;
        draft.taxCodes = action.response[3].taxCodes;
        draft.products = action.response[2].products;
        break;
    }
  });

export default preferencesReducer;
