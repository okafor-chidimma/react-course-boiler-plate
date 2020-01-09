import 'normalize.css/normalize.css';
import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import { firebase } from './firebase/firebase';
import ApiRoutes, { history } from './routers/ApiRoutes';
import store from './store/configureStore';
import './styles/style.scss';

const template = (
  <Provider store={store}>
    <ApiRoutes />
  </Provider>
);
const appRoot = document.getElementById('app');
ReactDOM.render(<LoadingPage />, appRoot);

let hasRendered = false;
const renderApp = (template, appRoot) => {
  if (!hasRendered) {
    hasRendered = true;
    ReactDOM.render(template, appRoot);
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(`${user.uid} logged in`);
    store.dispatch(login(user.uid));
    renderApp(template, appRoot);
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    console.log('user logged out');
    store.dispatch(logout());
    history.push('/');
    renderApp(template, appRoot);
  }
});
