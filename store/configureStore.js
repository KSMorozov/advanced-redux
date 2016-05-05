import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(createSagaMiddleware(rootSaga))
  );
}
