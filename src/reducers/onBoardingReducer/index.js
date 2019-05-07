import _ from 'lodash';

const initialState = {
  loading: false
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);

  switch (action.type) {
    case 'API_LOADING':
      newState.loading = true;
      return newState;

    case 'SUCCESS_GET_INFO':
      newState.loading = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;