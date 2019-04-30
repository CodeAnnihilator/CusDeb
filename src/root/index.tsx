import {ConnectedRouter, routerMiddleware} from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import moment from 'moment';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';

import {axiosInstance} from 'utils/fetch';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Routes from './Routes';

import 'locales/i18nextConfig';
import 'styles/index.scss';

moment.defaultFormat = 'YYYY.MM.DD';

export const history = createHistory({
	basename: `/${process.env.PREFIX}`,
});

const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

export type RootState = StateType<typeof rootReducer>;

const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			routerMiddleware(history),
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

axiosInstance.createAxiosResponseInterceptor(store);

sagaMiddleware.run(rootSaga);

render((
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
), document.getElementById('app'));
