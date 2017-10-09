import { combineReducers } from 'redux';
import version from './versionReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  user,
  version,
});

export default rootReducer;
