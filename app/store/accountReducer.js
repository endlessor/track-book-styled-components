/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import * as actionTypes from '../constants/actionType';

export const initialState = {
  error: null,
  accounts: [],
};

/* eslint-disable default-case, no-param-reassign */
const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FAILED_FETCHING_ACCOUNTS:
        draft.error = action.error;
        break;
      case actionTypes.SUCCESS_FETCHING_ACCOUNTS:
        draft.accounts = action.response.accounts;
        break;
    }
  });

export default accountReducer;
