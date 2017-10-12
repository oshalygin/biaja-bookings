import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import initialState from './initialState';
import events from './eventReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  events,
});

export default rootReducer;
