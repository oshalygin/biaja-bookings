/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { FontIcon } from 'material-ui';

import './dashboard.css';
import history from '../../utilities/history';

const navigateToRoute = route => {
  const updatedRoute = `/dashboard/${route}`;
  history.push(updatedRoute);
};

const ListView = () =>
  <div styleName="left-nav-container">
    <List style={{ margin: 0, padding: 0 }}>
      <ListItem
        onClick={() => navigateToRoute('upcoming')}
        leftIcon={<FontIcon className="material-icons">events</FontIcon>}
      >
        <span styleName="list-item-text">Upcoming Events</span>
      </ListItem>
      <ListItem
        onClick={() => navigateToRoute('past')}
        leftIcon={<FontIcon className="material-icons">event_busy</FontIcon>}
      >
        <span styleName="list-item-text">Past Events</span>
      </ListItem>
      <ListItem
        onClick={() => navigateToRoute('venues')}
        leftIcon={<FontIcon className="material-icons">business</FontIcon>}
      >
        <span styleName="list-item-text">Venues</span>
      </ListItem>
    </List>
  </div>;

export default ListView;
