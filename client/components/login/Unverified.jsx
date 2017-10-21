import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';

import history from '../../utilities/history';

import './registration.css';
import { RaisedButton } from 'material-ui';

const navigateToLogin = () => {
  history.push('/login');
};

const Unverified = () =>
  <MuiThemeProvider muiTheme={muiTheme}>
    <div styleName="registration-container" style={{ minHeight: '100vh' }}>
      <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
          <div>
            <h1
              className="logo-name"
              styleName="logo-name"
              style={{ fontSize: '10em' }}
            >
              AB
            </h1>
          </div>
          <div styleName="content-container">
            <h3 style={{ paddingTop: '3em' }}>Unverified Account</h3>
            <p style={{ paddingTop: '3em', paddingBottom: '3em' }}>
              Your account has not been verified. Please contact your
              administrator to gain access.
            </p>
            <RaisedButton
              type="button"
              label="back to login"
              primary
              fullWidth
              onClick={navigateToLogin}
            />
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>;

export default Unverified;
