import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {
	ConnectedRouter as Router,
	routerMiddleware,
	push
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import rootSaga from './sagas'; // we have imported saga function which forks all the sagas
import rootReducer from './reducers'; // we have imported all the reducers with in one reducer file with combineReducers
import {isTokenValid} from './utils';
import * as actions from './actions';

const history=createHistory();
const middleware=routerMiddleware(history)

const sagaMiddleware=createSagaMiddleware();

const store=createStore(rootReducer,
	 process.env.NODE_ENV !== 'production' &&
    window.devToolsExtension &&
    window.devToolsExtension(),
	process.env.NODE_ENV !== 'production' ?
	applyMiddleware(middleware,sagaMiddleware,logger) :
	applyMiddleware(middleware,sagaMiddleware)
	)

	sagaMiddleware.run(rootSaga)  // Here we run the rootSaga function with sagaMiddleware

	if(isTokenValid()){
		store.dispatch(actions.loginDataSuccess());
		store.dispatch(push('/data'))
	}else{
		store.dispatch(push('/login'))
	}

ReactDom.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.querySelector('#app')
	)