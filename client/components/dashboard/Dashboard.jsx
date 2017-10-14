import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MuiThemeProvider } from 'material-ui';
import * as eventActionCreators from '../../actions/eventActions';

import LeftNav from './LeftNav';
import TopBar from './AppBar';
import Events from './events/Events.jsx';
import PastEvents from './events/PastEvents.jsx';
import Venues from './events/Venues.jsx';

import muiTheme from '../../utilities/muiTheme';
import './dashboard.css';

const propTypes = {
  match: PropTypes.object.isRequired,
};

class Dashboard extends React.Component {
  render() {
    const { match } = this.props;
    const path = match.path;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <TopBar />
          <div styleName="container">
            <LeftNav />
            <Switch>
              <Route exact path={`${path}`} component={Events} />
              <Route path={`${path}/upcoming`} component={Events} />
              <Route path={`${path}/past`} component={PastEvents} />
              <Route path={`${path}/venues`} component={Venues} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Dashboard.propTypes = propTypes;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
