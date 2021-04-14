import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';
import monitorReducerEnhancer from './enhancer/monitorReducer';
import loggerMiddleware from './middleware/logger';
import logger from 'redux-logger';

export default function configureStore(preloadedState) {
  const middleware = [loggerMiddleware, logger];
  const middlewareEnhancer = applyMiddleware(...middleware);
  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composeEnhancers =
    process.env.NODE_ENV === 'production'
      ? compose(...enhancers)
      : composeWithDevTools(...enhancers);
  const store = createStore(rootReducers, preloadedState, composeEnhancers);
  return store;
}
