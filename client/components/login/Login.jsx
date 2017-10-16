import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';

import history from '../../utilities/history';

import './login.css';
import Snackbar from '../common/Snackbar';
import Spinner from '../common/Spinner';
import LoginForm from './LoginForm';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    errorText: {
      username: false,
      password: false,
    },
  };

  navigateToRegistration = () => {
    history.push('/register');
  };

  onChange = () => {};

  login = () => {};

  render() {
    const formErrors = {};
    const loading = false;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
              <div>
                <h1 className="logo-name" style={{ fontSize: '10em', marginBottom: '0.25em' }}>BIAJI</h1>
              </div>
              <h3>Welcome back to the Artist Dashboard</h3>
              <p>Login to get started</p>
              <LoginForm
                hidden={loading}
                errors={formErrors}
                onChange={this.onChange}
                navigateToRegistration={this.navigateToRegistration}
                onSubmit={this.submit}
              />
              <Spinner hidden={!loading} />
              <p className="m-t">
                <small>
                 BIAJI is a registered trademark of BIAJI, LLC.
                </small>
              </p>
            </div>
          </div>
          <Snackbar
            open={this.state.notification}
            action="OK"
            message={this.state.notificationMessage}
            onActionTouchTap={this.closeNotification}
            onRequestClose={this.closeNotification}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
