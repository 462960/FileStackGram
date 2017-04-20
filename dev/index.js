
import React from 'react';
import ReactDOM from 'react-dom';
import {syncHistoryWithStore} from 'react-router-redux';
require('./sass/styles');

import 'babel-polyfill'; // for redux-saga
import {
  Router,
  Route,
 browserHistory
} from 'react-router';


import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from './reducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
// our components
import {LayoutContainer} from './components/Layout';
import { HomeContainer } from './components/home';
import { DetailContainer } from './components/detail';
import { AddContainer } from './components/add';


// Filestack API requires to set a key
filepicker.setKey("AHRd8VRUSST2QylUPpUrTz");

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
  )
);
 sagaMiddleware.run(rootSaga);

//const history = syncHistoryWithStore(browserHistory, store);

// the 3 paths of the app
const routes = <Route component={LayoutContainer}>
  <Route path="/" component={HomeContainer} />
  <Route path="/detail/:id" component={DetailContainer} />
  <Route path="/add" component={AddContainer} />
</Route>;

// add provider as first component and connect the store to it
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);


