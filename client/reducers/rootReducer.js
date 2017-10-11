import { combineReducers } from 'redux';
import events from './eventReducer';

const rootReducer = combineReducers({
  events,
});

export default rootReducer;
