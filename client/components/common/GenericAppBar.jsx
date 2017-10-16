import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
};

const titleStyle = {
  fontSize: fonts.fontLg,
  fontWeight: '500',
  color: colors.opacity.white0_8,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  top: '-0.75em',
  left: '0.5em',
};

const appBarStyle = color => ({
  backgroundColor: color || colors.neutral.dark,
  height: '3em',
});

const GenericTopBar = ({ title, color }) =>
  <AppBar
    style={{ ...appBarStyle(color) }}
    title={title}
    showMenuIconButton={false}
    titleStyle={titleStyle}
  />;

GenericTopBar.propTypes = propTypes;

export default GenericTopBar;
