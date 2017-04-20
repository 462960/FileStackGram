import {createStore, compose, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import 'babel-polyfill'; // for redux-saga

import rootReducer from './reducer';

export const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
window.devToolsExtension ? window.devToolsExtension() : f => f
	)

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware), enhancer);
//export const history = syncHistoryWithStore(browserHistory, store);
//sagaMiddleware.run(rootSaga);