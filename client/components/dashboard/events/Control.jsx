import React from 'react';
import PropTypes from 'prop-types';
import { SelectField, MenuItem } from 'material-ui';

import './events.css';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  controlLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Control = ({
  name,
  controlLabel,
  selected,
  data,
  onChange,
  disabled,
}) => {
  const dataSet = data.map((label, value) => ({ name, value, label }));
  const selectedData = dataSet.find(option => option.value === selected);

  return (
    <div styleName="control-container">
      <div styleName="control-label">
        {controlLabel}
      </div>
      <div styleName="select-control">
        <SelectField
          value={selectedData}
          disabled={disabled}
          labelStyle={{ margin: '0 auto' }}
          underlineStyle={{
            borderColor: colors.brand.blue,
            borderWidth: '2px',
          }}
          fullWidth
          onChange={onChange}
          labelStyle={{ fontSize: fonts.fontMd }}
        >
          {dataSet.map(option => {
            return (
              <MenuItem
                key={option.value}
                primaryText={option.label}
                value={option}
              />
            );
          })}
        </SelectField>
      </div>
    </div>
  );
};

Control.propTypes = propTypes;

export default Control;
