import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

// thunk is a middleware that we use with redux in order to dispatch functions to the redux store
// to use this middleware and our redux developer tool we use line 10 and if it is just the dev tool we use 35(window.) and just the middleware we call the applyMiddleware() as shown on 35 without the composeEnhancers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// demoState is going to contain a list of things that we want to track
const store = createStore(
  combineReducers({
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const configureStore = () => {
  return store;
};
export default store;
