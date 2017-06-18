import React, { Component,PropTypes } from 'react';

class Counter extends Component {
  incrementIfOdd(){
    if(this.props.value % 2 != 0 ){
      this.props.onIncrement();
    }
  }
  incrementAsync(){
    setTimeout(()=>{
      this.props.onIncrement();
    },1000)
  }
  render() {
    const {value,onIncrement,onDecrement} = this.props;
    return (
      <div>
        点击：{value} 次 {' '}
        <button onClick={onIncrement}> + </button> {' '}
        <button onClick={onDecrement}> - </button> {' '}
        <button onClick={this.incrementIfOdd.bind(this)}> 奇数+ </button> {' '}
        <button onClick={this.incrementAsync.bind(this)}> 异步+ </button> {' '}
      </div>
    );
  }
}

// 验证props
Counter.PropTypes = {
  value:PropTypes.number.isRequired,
  onIncrement:PropTypes.func.isRequired,
  onDecrement:PropTypes.func.isRequired
}
export default Counter;