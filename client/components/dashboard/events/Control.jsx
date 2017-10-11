import React from 'react';
import { SelectField, MenuItem } from 'material-ui';

import './events.css';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const Control = ({ label, data }) =>
  <div styleName="control-container">
    <div styleName="control-label">
      {label}
    </div>
    <div styleName="select-control">
      <SelectField
        value={1}
        labelStyle={{ margin: '0 auto' }}
        underlineStyle={{ borderColor: colors.brand.blue, borderWidth: '2px' }}
        fullWidth
        labelStyle={{ fontSize: fonts.fontXxs }}
      >
        <MenuItem value={1} primaryText="United States" />
      </SelectField>
    </div>
  </div>;

export default Control;
