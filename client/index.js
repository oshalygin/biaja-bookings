/* eslint-disable import/default */
/* eslint-disable react/jsx-no-bind */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import rootSaga from './sagas/rootSaga';

// To load styles globally without CSS modules, use the !style!css!{{path}} format.
// https://github.com/css-modules/css-modules/pull/65#issuecomment-248280248
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/animate.css/animate.min.css';
// import '../node_modules/dashboard-styles/src/dashboard.css';
import '../node_modules/dashboard-styles/dist/dashboard.min.css';

import './images/favicon.ico';
import './images/apple-touch-icon.png';
import './images/favicon-16x16.png';
import './images/favicon-32x32.png';
import './images/mstile-150x150.png';
import './images/safari-pinned-tab.svg';

import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/metismenu/dist/metisMenu.min';

import './inspinia.js';

import pace from '../node_modules/pace-progress/pace.min';
pace.start();

// Necessary for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App.jsx';

const store = configureStore();
store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('application'),
);
