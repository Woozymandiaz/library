import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './features/app/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchDataReducer } from './redux/reducer';
import './index.css';

const store = createStore(searchDataReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
