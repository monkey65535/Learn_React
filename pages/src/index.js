import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './components/Header/Header';


class Index extends React.Component{
  render() {
    return (
      <div>
        <ComponentHeader/>
        <h1>啊哈哈哈哈</h1>
      </div>
      )
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'));