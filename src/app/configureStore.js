import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

const logger = createLogger();

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, initialState, applyMiddleware(/* other middleware, */logger, sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  };
}


// const sagaMiddleware = createSagaMiddleware();
// let createStoreWithMiddleware =  applyMiddleware(
//   sagaMiddleware,
//   createLogger
// )(createStore);
//
// sagaMiddleware.run(helloSaga);
//
// export default function configureStore() {
//   return createStoreWithMiddleware(rootReducer);
// }
