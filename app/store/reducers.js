/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../utils/history';
import languageProviderReducer from '../containers/LanguageProvider/reducer';
import preferencesReducer from '../containers/OnBoarding/PreferencesPage/reducer';
import paymentConnectorsReducer from '../containers/OnBoarding/PaymentsConnectPage/reducer';
import transactionReducer from '../containers/Transactions/TransactionsPage/reducer';
import accountReducer from './accountReducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    preferences: preferencesReducer,
    paymentConnectors: paymentConnectorsReducer,
    transactions: transactionReducer,
    accounts: accountReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
