import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch, Redirect } from 'react-router-dom'

import Lounches from 'modules/Lounches/Lounches'
import Rockets from 'modules/Rockets/Rockets'

import Header from 'common/components/Header/Header'

const Routes = () => (
  <div>
    <Header totalLounches={21} />
    <Switch>
      <Redirect exact from='/' to='/lounches' />
      <Route path='/lounches' component={Lounches} />
      <Route path='/rockets' component={Rockets}/>
    </Switch>
  </div>
)

export default hot(module)(Routes)