import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PostScreen } from '../components/post/PostScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  const { logged } = useSelector((state) => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            path="/login"
            component={AuthRouter}
            isLoggedIn={logged}
          />
          <PrivateRouter
            exact
            path="/"
            component={PostScreen}
            isLoggedIn={logged}
          />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};
