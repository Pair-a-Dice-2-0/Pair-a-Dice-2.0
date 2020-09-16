import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //ComposeWithDevTools()
import reducers from './reducers/index.js';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  //Redux dev tools has access to store
  composeWithDevTools(applyMiddleware(thunk))
);

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducers,
//   composeEnhancer(applyMiddleware(thunk)),
// );

export default store;