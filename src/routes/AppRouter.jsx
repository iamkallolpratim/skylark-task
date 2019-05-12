import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../components/common/loading';
import NotFound from '../components/common/notFound';

const DashboardContainer = Loadable({
  loader: () => import(/* webpackChunkName: "DashboardContainer" */'../containers/dashboard'),
  loading: Loading
});


const AppRouter = ({ ...rest }) => {
  console.log(rest.match);
  return (
    <Switch>
      
      <Route
        {...rest}
        exact={true}
        path={`${rest.match.path}/`}
        render={props => <DashboardContainer {...props} />}
      />
      <Route component={NotFound} />
    </Switch>);
};

export default AppRouter;