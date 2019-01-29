import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import tripReducer from '../reducers/tripReducer';

const rootReducer = combineReducers({
  trip: tripReducer
});

const middleWare = [];

middleWare.push(thunk)

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
middleWare.push(loggerMiddleware)

const configureStore = () => {
  return createStore(rootReducer, {},
    compose(
      applyMiddleware(...middleWare)
    ));
}

export default configureStore;