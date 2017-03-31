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
    this.commonArr = this.state.lists;
  }
  _setComment(key,value) {
    window.localStorage.setItem(key,value);
  }
  _getComment(key){
    return window.localStorage.getItem(key);
  }
  componentWillMount() {
    const ReComment = this._getComment('comment') ? this._getComment('comment') : "[]";
    this.setState({
      lists:JSON.parse(ReComment)
    })
  }
  handelSub(getData) {
    this.commonArr.push(getData);
    this._setComment('comment',JSON.stringify(this.commonArr));
    this.setState({lists:this.commonArr});
  }
  commentDelete(index) {
    console.log('up',index);
    this.commonArr.splice(index,1);
    this._setComment('comment',JSON.stringify(this.commonArr));
    this.setState({lists:this.commonArr});
  }
  render() {
    return (
      <div className="wrapper">
          <CommentInput onSubmit={this.handelSub.bind(this)}/>
          <CommentList listItem={this.state.lists} commentDelete={this.commentDelete.bind(this)}/>
      </div>
    );
  }
}

export default App;
