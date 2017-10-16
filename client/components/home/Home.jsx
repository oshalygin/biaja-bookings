import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';
import { RaisedButton } from 'material-ui';

import history from '../../utilities/history';

const navigateToLogin = () => {
  history.push('/login');
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
              onClick={navigateToLogin}
              fullWidth
              primary
              label="login"
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
