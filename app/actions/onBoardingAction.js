import * as ActionTypes from '../constants/actionType';

export function onBoarding() {
  return {
    type: ActionTypes.ON_BOARDING,
  };
}

export function fetchConnectors() {
  return {
    type: ActionTypes.FETCH_CONNECTORS,
  };
}

export function fetchPreferences() {
  return {
    type: ActionTypes.FETCH_PREFERENCES,
  };
}
