import React from 'react';
import LeftNav from './LeftNav';
import { MuiThemeProvider } from 'material-ui';

import TopBar from './AppBar';
import Events from './events/Events.jsx';

import muiTheme from '../../utilities/muiTheme';
import './dashboard.css';

class Dashboard extends React.Component {
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

export default Dashboard;
