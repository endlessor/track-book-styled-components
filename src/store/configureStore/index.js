import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import isDev from 'isdev';

import rootReducer from '../../reducers';

import rootSaga from '../../sagas';

let configureStore;

if (isDev) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  configureStore = initialState => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
      rootReducer,
      initialState,
      composeEnhancers(
        applyMiddleware(
          loggerMiddleware,
          sagaMiddleware
        )
      )
    );

    sagaMiddleware.run(rootSaga);

    return store;
  };
} else {
  configureStore = initialState => {
    const sagaMiddleware = createSagaMiddleware();
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    );
  }
}

export default configureStore;