import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MuiThemeProvider } from 'material-ui';
import * as eventActionCreators from '../../actions/eventActions';

import LeftNav from './LeftNav';
import TopBar from './AppBar';
import Events from './events/Events.jsx';

import muiTheme from '../../utilities/muiTheme';
import './dashboard.css';

class Dashboard extends React.Component {
  componentWillMount() {
    const { eventActions } = this.props;
    eventActions.retrieveEvents();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <TopBar />
          <div styleName="container">
            <LeftNav />
            <Events />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
