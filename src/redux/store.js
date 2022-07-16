import { applyMiddleware, createStore } from 'redux'
import cakeReducer from './cake/cakeReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'


const store = createStore(cakeReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;