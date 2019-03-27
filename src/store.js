import { applyMiddleware, createStore } from 'redux';
//import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
  } from 'react-router-redux'
import createHistory from 'history/createMemoryHistory'
import reducer from './reducers';

const history = createHistory()
const historyMiddleware = routerMiddleware(history)

const middleware = applyMiddleware(promise(), thunk, historyMiddleware /* createLogger() */);
const store = createStore(reducer, middleware);
export default store;