/* eslint-disable no-underscore-dangle */
/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
/*
 * Local import
 */
// Reducer
import reducer from './reducer';
import socket from './socket-middleware';

/*
 * Code
 */

let devTools = [];
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = [window.__REDUX_DEVTOOLS_EXTENSION__()];
}

// compose des middlewares et devtools
const socketMiddleware = applyMiddleware(socket);
const middlewares = compose(socketMiddleware, ...devTools);


// createStore
const store = createStore(reducer, middlewares);
/*
* Export
*/

export default store;