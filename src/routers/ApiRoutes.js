import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import DashBoardPage from '../components/DashboardPage';
import DoesNotExist from '../components/DoesNotExist';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// to expose the history to other files for redirection
export const history = createBrowserHistory();
const ApiRoutes = () => (
  // browserRouter needs to have only one direct child, hence the div
  /*
    when we use browser router, react-router by default is creating browser history and is registering it with our new instances of Route

    we can do this manually, by doing the following
    1. install history npm package so we can have access to push,location etc
    2. Import into your project
    3. create an instance of it called history
    4. change BrowserRouter Instance to Router and pass in the history props
  */
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={Login} exact={true} />
        <PrivateRoute path='/dashboard' component={DashBoardPage} />
        {
           //  <Route path='/help' component={HelpExpensePage} />
        }
        <Route component={DoesNotExist} />
      </Switch>
    </div>
  </Router>
);

export default ApiRoutes;
