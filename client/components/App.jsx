import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import history from '../utilities/history';
import Dashboard from './dashboard/Dashboard';
import Login from './login/Login';
import Registration from './login/Registration';
import Unverified from './login/Unverified';

import AuthorizedRoute from './common/AuthorizedRoute';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <AuthorizedRoute path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/unverified" component={Unverified} />
            <AuthorizedRoute path="/" component={Dashboard} />
            <Redirect to="/login" />
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
