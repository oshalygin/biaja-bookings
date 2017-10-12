import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './eventReducer';
import locations from './locationsReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  locations,
});

export default rootReducer;
