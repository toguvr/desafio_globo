import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HomePage from '../pages/HomePage';

import ErrorPage from '../pages/Errorpage';

import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';

export const routes = {
  users: '/users',
  dashboard: '/dashboard',
  index: '/',
};

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={routes.users} component={UserPage} isPrivate isAdmin />
      <Route path={routes.dashboard} component={HomePage} isPrivate />
      <Route exact path={routes.index} component={LoginPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
