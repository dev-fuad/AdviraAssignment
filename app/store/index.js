import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const applyMiddlewares = (() => {
  if (__DEV__) {
    return [
      // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(thunk)
      // ),
    ];
  }
  return [applyMiddleware(thunk)];
})();

const store = createStore(reducers, ...applyMiddlewares);

export default store;
