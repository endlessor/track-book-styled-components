/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import * as actionTypes from '../../../constants/actionType';

export const initialState = {
  error: null,
  connectorsComponent: [],
};

/* eslint-disable default-case, no-param-reassign */
const paymentConnectorsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionTypes.FAILED_FETCHING_CONNECTORS:
        draft.error = action.error;
        break;
      case actionTypes.SUCCESS_FETCHING_CONNECTORS:
        draft.connectorsComponent = action.response.connectorsComponent;
    }
  });

export default paymentConnectorsReducer;
