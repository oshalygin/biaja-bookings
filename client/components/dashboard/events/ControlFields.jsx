import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';

const propTypes = {
  countries: PropTypes.array.isRequired,
  states: PropTypes.array.isRequired,
  disabledState: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    country: PropTypes.number.isRequired,
  }),
};

const ControlFields = ({
  countries,
  states,
  selected,
  disabledState,
  onChange,
}) => {
  return (
    <div>
      <Control
        name="country"
        controlLabel="country"
        data={countries}
        selected={selected.country}
        disabled={false}
        onChange={onChange}
      />
      <Control
        name="state"
        controlLabel="state"
        data={states}
        selected={selected.state}
        disabled={disabledState}
        onChange={onChange}
      />
    </div>
  );
};

ControlFields.propTypes = propTypes;

export default ControlFields;
