import history from '../utils/history';

import configureStore from './configureStore';
// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

export default store;
