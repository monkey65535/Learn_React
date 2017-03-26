import React from 'react';
import PCHeader from '../Header/Pc_header';
import PCFooter from '../Footer/Foot';

class App extends React.Component {
  render() {
    return (
      <div id="App">
         <PCHeader/>
         <PCFooter/>
      </div>
    );
  }
}

export default App;
