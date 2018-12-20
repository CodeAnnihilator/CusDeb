import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from 'modules/Login/Login'
import Registration from 'modules/Registration/Registration'
import Dashboard from 'modules/Dashboard/containers/Dashboard'

import AuthLayoutRoute from 'common/components/Layouts/Auth/AuthLayoutRoute'
import MainLayoutRoute from 'common/components/Layouts/Main/MainLayoutRoute'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <AuthLayoutRoute path='/login' component={Login} />
      <AuthLayoutRoute path='/registration' component={Registration} />
      <MainLayoutRoute path='/dashboard' component={Dashboard} />
    </Switch>
  </div>
)

export default hot(module)(Routes)