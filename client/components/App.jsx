import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../utilities/history';
import Home from './home/Home';
import Dashboard from './dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
