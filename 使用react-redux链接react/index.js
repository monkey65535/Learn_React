import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

// 从react-redux中一如connect方法和Provide组件
import {connect, Provider} from 'react-redux';
// 从react中引入createStore方法
import {createStore} from 'redux';

// 创建component组件
class Counter extends Component {
  render() {
    const {value, addOnes} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={addOnes.bind(this)}>+1s</button>
      </div>
    )
  }
}
// 验证props类型
Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  addOnes: PropTypes.func.isRequired
}

// 定义一个ACTION
const ADDONE = 'ADDONE';

// 定义ACTION FUNCTION
const Addone = () => {
  return {type: ADDONE}
}

// 定义reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADDONE':
      return Object.assign({},{count:count},{count:count+1});
    default:
      return {count:count}
  }
}

// createStore
const store = createStore(counter,{count:10});

// mapStateToProps 
function mapStateToProps(state){
  console.log(state);
  return {
    value:state.count
  }
}

// mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
    addOnes:()=>dispatch(Addone())
  }
}

// connect
const App = connect({
  mapStateToProps,mapDispatchToProps
})(Counter);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)