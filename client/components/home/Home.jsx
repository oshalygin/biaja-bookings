import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';
import { RaisedButton } from 'material-ui';

import history from '../../utilities/history';

const navigateToDashboard = () => {
  history.push('/dashboard');
};

const navigateToRegistration = () => {
  history.push('/registration');
};

import './home.css';

const Home = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div styleName="main-content">
        <div styleName="content-box-container">
          <div styleName="text-content">BIAJA Bookings</div>
          <div styleName="button-control">
            <RaisedButton
              onClick={navigateToDashboard}
              fullWidth
              primary
              label="go to dashboard"
            />
          </div>
          <div styleName="button-control">
            <RaisedButton
              onClick={navigateToRegistration}
              fullWidth
              secondary
              label="register"
            />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Home;
