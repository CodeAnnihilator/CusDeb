import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withNamespaces} from 'react-i18next';

import Login from 'modules/Login/Login';
import Registration from 'modules/Registration/Registration';
import Dashboard from 'modules/Dashboard/containers/Dashboard';

import AuthLayoutRoute from 'common/components/Layouts/Auth/AuthLayoutRoute';
import MainLayoutRoute from 'common/components/Layouts/Main/MainLayoutRoute';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <AuthLayoutRoute path='/login' component={Login} />
      <AuthLayoutRoute path='/registration' component={Registration} />
      <MainLayoutRoute path='/dashboard' component={Dashboard} />
      <MainLayoutRoute path='/docs' component={() => <div><h2>Hello from /docs route</h2></div>} />
      <MainLayoutRoute path='/blog' component={() => <div><h2>Hello from /blog route</h2></div>} />
      <Route path='/feedback' component={() => {window.location = "https://yandex.ru/" as any; return null}} />
    </Switch>
  </div>
);

export default hot(module)(withNamespaces('translation')(Routes))