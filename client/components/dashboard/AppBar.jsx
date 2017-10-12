/* eslint-disable max-len */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import { IconButton, SvgIcon } from 'material-ui';
import colors from '../../styles/colors';

const LeftIcon = () =>
  <SvgIcon color={colors.opacity.white0_8}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z" />
  </SvgIcon>;

const titleStyle = {
  color: colors.opacity.white0_8,
};

const TopBar = () =>
  <AppBar
    iconElementLeft={
      <IconButton>
        <LeftIcon />
      </IconButton>
    }
    titleStyle={titleStyle}
    title="BIAJA Bookings"
  />;

export default TopBar;
