import React from 'react';
import PropTypes from 'prop-types';

import BaseSnackbar from 'material-ui/Snackbar';

const autoHideDuration = 6000;
const bodyStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: 9000000,
};
const style = {
  top: 'auto',
  bottom: 0,
  left: 'auto',
  right: '0',
  transform: 'translate3d(0, 0, 0)',
};

class Snackbar extends React.Component {
  constructor() {
    super();
    this.state = {
      autoHideDuration,
      style,
      bodyStyle,
    };
  }

  render() {
    const props = { ...this.state, ...this.props };

    return <BaseSnackbar {...props} />;
  }
}

Snackbar.propTypes = {
  action: PropTypes.node.isRequired,
  autoHideDuration: PropTypes.number,
  bodyStyle: PropTypes.object,
  className: PropTypes.string,
  contentStyle: PropTypes.object,
  message: PropTypes.node.isRequired,
  onActionTouchTap: PropTypes.func,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  style: PropTypes.object,
};

export default Snackbar;
