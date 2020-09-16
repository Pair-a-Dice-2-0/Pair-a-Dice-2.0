import { combineReducers } from 'redux';
// import all reducers here
import mainReducer from './mainReducer.js';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  main: mainReducer,
});

// make the combined reducers available for import
export default reducers;

