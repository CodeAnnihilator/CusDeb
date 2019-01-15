import * as React from 'react';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { render } from 'react-dom';

import 'styles/index.scss'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'
import Routes from './Routes'

const sagaMiddleware = createSagaMiddleware()
const history = createHistory()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
)

sagaMiddleware.run(rootSaga)

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))