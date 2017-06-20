import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'

// 从react中引入createStore方法
import {createStore} from 'redux';
// 从react-redux中一如connect方法和Provide组件
import {connect, Provider} from 'react-redux';

// 创建component组件
class Counter extends Component {
  render() {
    const {value, addOnes,Remove} = this.props;
    return (
      <div>
        <button onClick={Remove.bind(this)}>-1s</button>&nbsp; 
        <span>{value}s</span> &nbsp; 
        <button onClick={addOnes.bind(this)}>+1s</button>
      </div>
    )
  }
}
// <button onClick={addOnes.bind(this)}>+1s</button>
// 验证props类型
Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  addOnes: PropTypes.func.isRequired
}

// 定义一个ACTION
const ADDONE = 'ADDONE';
const REMOVE = 'REMOVE';
// 定义ACTION FUNCTION
const Addone = () => {
  return {type: ADDONE}
}
const Remove = () => {
  return {type: REMOVE}
}

// 定义reducer
function counter(state = {
  count: 0
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADDONE':
      return {
        count: state.count + 1
      };
    case 'REMOVE':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

// createStore
const store = createStore(counter, {count: 10},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// mapStateToProps
function mapStateToProps(state) {
  console.log(state);
  return {value: state.count}
}

// mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return {
    addOnes: () => {
      dispatch(Addone())
    },
    Remove: ()=>{
      console.log(this);
      dispatch(Remove());
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     Remove: ()=> dispatch(Remove())
//   }
// }

// connect
const App = connect(mapStateToProps, mapDispatchToProps)(Counter)

const rootEl = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, rootEl)