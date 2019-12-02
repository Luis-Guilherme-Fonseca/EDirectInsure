import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import MainReducer from './reducers/main';
import Router from './Router';

const store = createStore(MainReducer, compose(...[applyMiddleware(thunk)]))

function App() {
  return (
    <Provider store={store} >
      <Router />
    </Provider>
  );
}

export default App;


// import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'