import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../common/TextField.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import './login.css';

const textFieldLoginStyles = {
  color: '#CCC',
};

const textFieldInputStyle = {
  color: '#F5F5F5',
};

const LoginForm = ({
  hidden,
  errors,
  onChange,
  onSubmit,
  navigateToRegistration,
}) => {
  const formDisplay = hidden ? { display: 'none' } : { display: 'initial' };

  const errorTextDisplay = errors.server
    ? { display: 'initial' }
    : { display: 'none' };

  return (
    <form style={formDisplay} className="m-t">
      <div styleName="login-container">
        <div styleName="login-field-container">
          <div style={errorTextDisplay} styleName="error-text">
            {errors.server}
          </div>
          <TextField
            floatingLabelText="Email Address"
            inputStyle={textFieldInputStyle}
            name="email"
            type="text"
            errorText={errors.email ? 'Not a valid email address' : ''}
            fullWidth
            floatingLabelStyle={textFieldLoginStyles}
            onChange={onChange}
          />
          <TextField
            floatingLabelText="Password"
            inputStyle={textFieldInputStyle}
            name="password"
            type="password"
            errorText={errors.password ? 'Enter a password' : ''}
            fullWidth
            floatingLabelStyle={textFieldLoginStyles}
            onChange={onChange}
          />
        </div>
        <RaisedButton
          type="submit"
          label="Log In"
          fullWidth
          primary
          onClick={onSubmit}
        />
      </div>
      <p className="text-muted text-center">
        <small>Don't have an account?</small>
      </p>
      <RaisedButton
        type="button"
        label="Register"
        primary={false}
        fullWidth
        onClick={navigateToRegistration}
      />
    </form>
  );
};

LoginForm.propTypes = {
  hidden: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  navigateToRegistration: PropTypes.func.isRequired,
};

export default LoginForm;
