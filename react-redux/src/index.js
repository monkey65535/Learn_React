import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import PropTypes from 'prop-types';

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const subscribe = (listener) => listeners.push(listener);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  dispatch({});
  return {getState, dispatch, subscribe};
}

const themeReducer = (state, action) => {
  if (!state) {
    return {themeColor: 'red'};
  }

  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
    default:
      return state;
  }
}
const store = createStore(themeReducer);

// 将我们创建的store放入index组件
class Index extends React.Component {
  // 定义ConText
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext() {
    return {store}
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>, document.getElementById('root'));
