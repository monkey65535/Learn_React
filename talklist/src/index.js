import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './App/App';
import commentsReducer from './Reducers/comments';

import './index.css';

const store = createStore(commentsReducer);

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
