import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/common/loading';
import NotFound from '../components/common/notFound';

const LoginContainer = Loadable({
  loader: () => import(/* webpackChunkName: "LoginContainer" */'../containers/auth/login'),
  loading: Loading
});


const PublicRouter = ({ ...rest }) => {
  console.log(rest.match);
  return (
    <Switch>
      
      <Route
        {...rest}
        exact={true}
        path={`${rest.match.path}/`}
        render={props => <LoginContainer {...props} />}
      />
      <Route component={NotFound} />
    </Switch>);
};

export default PublicRouter;