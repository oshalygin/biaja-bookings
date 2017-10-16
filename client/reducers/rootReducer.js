import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './eventReducer';
import locations from './locationsReducer';
import loading from './loadingReducer';
import notification from './notificationReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  events,
  locations,
  loading,
  notification,
  user,
});

export default rootReducer;
