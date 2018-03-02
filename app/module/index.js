import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import currencyReducer from './currencies/reducer';

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : [];

const reducers = combineReducers({
  currencies: currencyReducer,
});

export default createStore(reducers, applyMiddleware(...middlewares));
