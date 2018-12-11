import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { render } from 'react-dom'

import rootReducer from './rootReducer'
import Routes from './Routes.js'

const history = createHistory()

const store = createStore(
  rootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
), document.getElementById('app'))