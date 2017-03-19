import React from 'react';
import ReactDOM from 'react-dom';
import IndexBody from './components/IndexBody/indexBody'
import ComponentHeader from './components/Header/Header';
import ComponentFooter from './components/Footer/Footer';

class Index extends React.Component{
  render() {
    return (
      <div id="app">
        <ComponentHeader/>
        <IndexBody/>
        <ComponentFooter/>
      </div>
      )
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'));