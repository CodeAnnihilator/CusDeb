import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Routes from './Routes';

// import {whyDidYouUpdate} from 'why-did-you-update';

import 'locales/i18nextConfig';
import 'styles/index.scss';

const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const store = createStore(
	rootReducer(history),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
		),
	),
);

sagaMiddleware.run(rootSaga);

// whyDidYouUpdate(React, {include: [/^Select/], exclude: [/^Connect/]} as any); use for re-renders searching

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
), document.getElementById('app'));
