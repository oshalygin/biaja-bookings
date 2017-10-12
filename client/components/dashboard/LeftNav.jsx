import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { FontIcon } from 'material-ui';

import './dashboard.css';

const ListView = () =>
  <div styleName="left-nav-container">
    <List style={{ margin: 0, padding: 0 }}>
      <ListItem
        // primaryText="Events"
        leftIcon={<FontIcon className="material-icons">events</FontIcon>}
      >
        <span styleName="list-item-text">Events</span>
      </ListItem>
      <ListItem
        // primaryText="Artists"
        leftIcon={<FontIcon className="material-icons">person</FontIcon>}
      >
        <span styleName="list-item-text">Artists</span>
      </ListItem>
    </List>
  </div>;

export default ListView;
