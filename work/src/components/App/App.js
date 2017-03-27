import React from 'react';
import PCHeader from '../Header/Pc_header';
import PCFooter from '../Footer/Foot';
import PCIndex from '../indexbody/PC_index';
class App extends React.Component {
  render() {
    return (
      <div id="App">
         <PCHeader/>
         <PCIndex></PCIndex>
         <PCFooter/>
      </div>
    );
  }
}

export default App;
