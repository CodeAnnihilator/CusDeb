import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'

import Lounches from 'modules/Lounches/containers/Lounches'
import Rockets from 'modules/Rockets/Rockets'

import Header from 'common/containers/Header'

const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Redirect exact from='/' to='/lounches' />
      <Route path='/lounches' component={Lounches} />
      <Route path='/rockets' component={Rockets}/>
    </Switch>
  </div>
)

export default hot(module)(Routes)