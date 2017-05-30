import React from 'react';
import './App.css';
import CommentInput from '../Containers/CommentInput';
import CommentList from '../Containers/CommentList';
class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
          <CommentInput/>
          <CommentList/>
      </div>
    );
  }
}

export default App;
