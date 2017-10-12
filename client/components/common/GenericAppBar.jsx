import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const titleStyle = {
  fontSize: fonts.fontSm,
  fontWeight: '400',
  color: colors.opacity.white0_8,
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  top: '-0.5em',
  left: '0.5em',
};

const appBarStyle = {
  backgroundColor: colors.neutral.dark,
  height: '3em',
};

const GenericTopBar = ({ title }) =>
  <AppBar
    style={appBarStyle}
    title={title}
    showMenuIconButton={false}
    titleStyle={titleStyle}
  />;

GenericTopBar.propTypes = propTypes;

export default GenericTopBar;