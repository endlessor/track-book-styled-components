import * as ActionTypes from '../constants/actionType';

export function fetchAccounts() {
  return {
    type: ActionTypes.FETCH_ACCOUNTS,
  };
}
