import React from 'react';
import ControlFields from './ControlFields';

import './events.css';

const Events = ({ locations }) =>
  <div styleName="events-container">
    <ControlFields locations={locations} />
  </div>;

export default Events;
