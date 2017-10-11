import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { FontIcon } from 'material-ui';

import './dashboard.css';

const ListView = () =>
  <div styleName="left-nav-container">
    <List>
      <ListItem
        primaryText="Events"
        leftIcon={<FontIcon className="material-icons">events</FontIcon>}
      />
      <ListItem
        primaryText="Artists"
        leftIcon={<FontIcon className="material-icons">person</FontIcon>}
      />
    </List>
  </div>;

export default ListView;
