import { combineReducers } from 'redux'
import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
  } from 'react-router-redux'
import experts from './experts';
import tests from './tests';
import contacts from './contacts';
import questions from './questions';
import base from './base';
import surveys from './surveys';
import checkLists from './checkLists';
import appReducer from './appReducer';


export default combineReducers({
    experts,
    tests,
    contacts,
    questions,
    base,
    surveys,
    router: routerReducer,
    checkLists,
    appReducer
})