import { combineReducers } from 'redux';

import onBoardingReducer from './onBoardingReducer';

const rootReducer = combineReducers({
  onBoarding: onBoardingReducer
});

export default rootReducer;