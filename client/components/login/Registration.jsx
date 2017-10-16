import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/registrationActions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../../utilities/muiTheme';

import history from '../../utilities/history';

import RegistrationForm from './RegistrationForm';
import Snackbar from '../common/Snackbar';
import Spinner from '../common/Spinner';

import './registration.css';
import validation from '../../utilities/validation';

const propTypes = {
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  registrationActions: PropTypes.object.isRequired,
  notificationMessage: PropTypes.string,
};

class Registration extends React.Component {
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

  navigateToLogin = () => {
    history.push('/login');
  };

  submit = event => {
    event.preventDefault();
    const { user } = this.state;
    const { registrationActions } = this.props;

    if (this.validateForm()) {
      registrationActions.triggerRegistration(user);
    }
  };

  onChange = event => {
    const property = event.target.name;
    const { user } = this.state;
    user[property] = event.target.value;
  };

  validateForm = () => {
    const { user, formErrors } = this.state;
    const { email, password, confirmPassword } = user;

    let isValid = true;
    let errors = { ...formErrors };

    if (password !== confirmPassword) {
      errors = { ...errors, confirmPassword: true };
      isValid = false;
    } else {
      errors = { ...errors, confirmPassword: false };
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

  render() {
    const { loading } = this.props;
    const { formErrors } = this.state;

    const heading = loading ? 'Processing Registration' : 'Registration';
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div styleName="registration-container">
          <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
              <div>
                <h1
                  className="logo-name"
                  styleName="logo-name"
                  style={{ fontSize: '10em' }}
                >
                  BIAJI
                </h1>
              </div>
              <div styleName="content-container">
                <h3>
                  {heading}
                </h3>
                <p>
                  {!loading ? 'Create your account' : ''}
                </p>
                <RegistrationForm
                  hidden={loading}
                  errors={formErrors}
                  onChange={this.onChange}
                  onSubmit={this.submit}
                  navigateToLogin={this.navigateToLogin}
                />
                {loading &&
                  <div styleName="content-container-spinner">
                    <Spinner />
                  </div>}
              </div>
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

Registration.propTypes = propTypes;

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading.loadingRegistration,
  notificationMessage: state.notification,
});

const mapDispatchToProps = dispatch => {
  return {
    registrationActions: bindActionCreators(actionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
