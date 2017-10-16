/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as eventActionCreators from '../../actions/eventActions';
import * as userActionCreators from '../../actions/userActions';

import { List, ListItem } from 'material-ui/List';
import { FontIcon } from 'material-ui';

import './dashboard.css';
import history from '../../utilities/history';

const propTypes = {
  eventActions: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
};

class ListView extends React.Component {
  static propTypes = propTypes;

  navigateToRoute = route => {
    const { eventActions } = this.props;

    eventActions.clearEvents();
    const updatedRoute = `/dashboard/${route}`;
    history.push(updatedRoute);
  };

  navigateToLogin = () => {
    const { userActions } = this.props;

    userActions.logout();
    history.push('/login');
  };

  render() {
    return (
      <div styleName="left-nav-container">
        <List style={{ margin: 0, padding: 0 }}>
          <ListItem
            onClick={() => this.navigateToRoute('upcoming')}
            leftIcon={<FontIcon className="material-icons">people</FontIcon>}
          >
            <span styleName="list-item-text">Upcoming Events</span>
          </ListItem>
          <ListItem
            onClick={() => this.navigateToRoute('past')}
            leftIcon={<FontIcon className="material-icons">archive</FontIcon>}
          >
            <span styleName="list-item-text">Past Events</span>
          </ListItem>
          <ListItem
            onClick={() => this.navigateToRoute('venues')}
            leftIcon={
              <FontIcon className="material-icons">location_city</FontIcon>
            }
          >
            <span styleName="list-item-text">Venues</span>
          </ListItem>
          <ListItem
            onClick={() => this.navigateToLogin()}
            leftIcon={
              <FontIcon className="material-icons">exit_to_app</FontIcon>
            }
          >
            <span styleName="list-item-text">Log Out</span>
          </ListItem>
        </List>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  eventActions: bindActionCreators(eventActionCreators, dispatch),
  userActions: bindActionCreators(userActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
