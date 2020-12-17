import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginScreen} />

        <Redirect to="/login" />
      </Switch>
    </div>
  );
};
