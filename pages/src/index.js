import React from 'react';
import ReactDOM from 'react-dom';
import IndexBody from './components/Body/Body'
import ComponentHeader from './components/Header/Header';
import ComponentFooter from './components/Footer/Footer';
import Lift from './components/Life/Life';
import UseState from './components/UseState/UseState';

class Index extends React.Component{
  render() {
    return (
      <div id="app">
        <ComponentHeader/>
        <Lift/>
        <UseState/>
        <ComponentFooter/>
      </div>
      )
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'));