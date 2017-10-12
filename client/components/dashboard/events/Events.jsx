import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActionCreators from '../../../actions/eventActions';

import ControlFields from './ControlFields';

import './events.css';
import GenericTopBar from '../../common/GenericAppBar';

const propTypes = {
  eventActions: PropTypes.func.isRequired,
};

class Events extends React.Component {
  componentWillMount() {
    const { eventActions } = this.props;
    eventActions.retrieveEvents();
  }

  render() {
    return (
      <div styleName="container">
        <GenericTopBar title="Events" />
        <div styleName="events-container">
          <div styleName="controls-container">
            <ControlFields />
          </div>
        </div>
      </div>
    );
  }
}

Events.propTypes = propTypes;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
