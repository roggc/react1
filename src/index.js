//index.js

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import App from './components/app/index';

const logger=({ getState })=> {
  return next => action => {
    console.log('will dispatch', action)

    const returnValue = next(action)

    console.log('state after dispatch', getState())

    return returnValue
  }
};

const middleware=[thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

render
(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
