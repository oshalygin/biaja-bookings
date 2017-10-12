import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './eventReducer';
import locations from './locationsReducer';
import loading from './loadingReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  events,
  locations,
  loading,
});

export default rootReducer;
