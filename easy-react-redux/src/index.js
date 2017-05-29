import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import Header from './conponents/Header'
import Content from './conponents/Content'

import { Provider } from './react-redux';

// 构建一个store
function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  // 初始化state
  dispatch({});
  return {getState, dispatch, subscribe};
}

// 构建reducer
const themeReducer = (state, action) => {
  if (!state) {
    return {themeColor: 'red'}
  }

  switch (action.type) {
      // 当传入修改的type的时候，进行一次浅拷贝，并return拷贝完成之后的数据
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      };
    default:
      return state;
  }
}
// 构建store
const store = createStore(themeReducer);

class Index extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>, document.getElementById('root'))