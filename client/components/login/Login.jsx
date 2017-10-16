import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/userActions';
import history from '../../utilities/history';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';

import './login.css';
import Snackbar from '../common/Snackbar';
import Spinner from '../common/Spinner';
import LoginForm from './LoginForm';
import validation from '../../utilities/validation';

const propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  userActions: PropTypes.object.isRequired,
  notificationMessage: PropTypes.string,
};

class Login extends React.Component {
  state = {
    user: {},
    loading: false,
    formErrors: {},
    notification: false,
    notificationMessage: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.notificationMessage) {
      const { notificationMessage } = nextProps;

      this.setState({
        notification: true,
        formErrors: { ...this.state.formErrors, server: notificationMessage },
        notificationMessage,
      });
    }
  }

  navigateToRegistration = () => {
    history.push('/registration');
  };

  validateForm = () => {
    const { user, formErrors } = this.state;
    const { email, password } = user;

    let isValid = true;
    let errors = { ...formErrors };

    if (!password) {
      errors = { ...errors, password: true };
      isValid = false;
    } else {
      errors = { ...errors, password: false };
    }

    if (!validation.validateEmail(email)) {
      errors = { ...errors, email: true };
      isValid = false;
    } else {
      errors = { ...errors, email: false };
    }

    this.setState({ formErrors: errors });
    return isValid;
  };

  closeNotification = () => {
    this.setState({ notification: false });
  };

  onChange = event => {
    const property = event.target.name;
    const { user } = this.state;
    user[property] = event.target.value;
  };

  submit = event => {
    event.preventDefault();
    const { user } = this.state;
    const { userActions } = this.props;

    if (this.validateForm()) {
      userActions.userLogin(user);
    }
  };

  render() {
    const { loading } = this.props;
    const { formErrors } = this.state;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
              <div>
                <h1
                  className="logo-name"
                  style={{ fontSize: '10em', marginBottom: '0.25em' }}
                >
                  BIAJI
                </h1>
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
                <small>BIAJI is a registered trademark of BIAJI, LLC.</small>
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

Login.propTypes = propTypes;

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading.loadingUserLogin,
  notificationMessage: state.notification,
});

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(actionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
