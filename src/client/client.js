//Start location for client side app

//BrowserRouter does not work on the server because it expects an address bar
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Provider from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(thunk));


ReactDOM.hydrate(
  <Provider store={store} />
    <BrowserRouter >
      <Routes />
    </BrowserRouter>,
 document.querySelector('#root')
 );