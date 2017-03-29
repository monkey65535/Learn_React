import React from 'react';
import './App.css';
import CommentInput from '../CommentInput/CommentInput';
import CommentList from '../CommentList/CommentList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
          lists:[]
    }
    this.commonArr = [];
  }
  handelSub(getData) {
    this.commonArr.push(getData);
    this.setState({lists:this.commonArr});
  }
  render() {
    return (
      <div className="wrapper">
          <CommentInput onSubmit={this.handelSub.bind(this)}/>
          <CommentList listItem={this.state.lists}/>
      </div>
    );
  }
}

export default App;
