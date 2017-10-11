import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';

const propTypes = {
  locations: PropTypes.array.isRequired,
};

const ControlFields = ({ locations }) =>
  <div>
    <Control label="country" />
  </div>;

ControlFields.propTypes = propTypes;

export default ControlFields;
