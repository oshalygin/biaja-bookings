import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';

import './registration.css';
import TextField from '../common/TextField';

const underlineStyle = {
  borderBottom: '1px solid rgb(224, 224, 224)',
};

const RegistrationForm = ({
  hidden,
  errors,
  onChange,
  onSubmit,
  navigateToLogin,
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
          <div styleName="form-controls">
            <TextField
              floatingLabelFixed
              underlineStyle={underlineStyle}
              floatingLabelText="Email Address"
              name="email"
              type="text"
              errorText={errors.email ? 'Not a valid email address' : ''}
              fullWidth
              underlineShow
              onChange={onChange}
            />
            <TextField
              floatingLabelFixed
              underlineStyle={underlineStyle}
              floatingLabelText="Password"
              name="password"
              type="password"
              fullWidth
              onChange={onChange}
            />
            <TextField
              floatingLabelFixed
              underlineStyle={underlineStyle}
              floatingLabelText="Confirm Password"
              name="confirmPassword"
              type="password"
              errorText={
                errors.confirmPassword ? 'Password does not match' : ''
              }
              fullWidth
              onChange={onChange}
            />
            <TextField
              floatingLabelFixed
              underlineStyle={underlineStyle}
              floatingLabelText="First Name"
              name="firstName"
              type="text"
              fullWidth
              onChange={onChange}
            />
            <TextField
              floatingLabelFixed
              underlineStyle={underlineStyle}
              floatingLabelText="Last Name"
              name="lastName"
              type="text"
              fullWidth
              onChange={onChange}
            />
          </div>
        </div>
        <RaisedButton
          type="submit"
          label="register"
          fullWidth
          primary
          onClick={onSubmit}
          onSubmit={onSubmit}
        />
      </div>
      <p className="text-muted text-center">
        <small>Already have an account?</small>
      </p>
      <RaisedButton
        type="button"
        label="login"
        primary={false}
        fullWidth
        onClick={navigateToLogin}
      />
    </form>
  );
};

RegistrationForm.propTypes = {
  hidden: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  navigateToLogin: PropTypes.func.isRequired,
};

export default RegistrationForm;
