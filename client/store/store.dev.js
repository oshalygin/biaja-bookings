import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, { END } from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
    createLogger({
      collapsed: true,
      duration: true,
      diff: true,
    }),
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : format => format, // add support for Redux dev tools
    ),
  );

  if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
      const nextReducer = require('../reducers/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
