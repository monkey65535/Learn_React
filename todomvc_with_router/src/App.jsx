import React, {Component} from 'react';
import Item from './components/Item/Item.jsx';
import Footer from './components/Footer/Footer.jsx';
class App extends Component {
  constructor(){
    super();
    this.state = {
      todoState:[]
    }
    this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
    this.onDestory = this.onDestory.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  //添加
  handleKeyDownPost(ev){
    if(ev.keyCode!== 13) return;
    let value = ev.target.value.trim();
    if(!value) return;
    let todo = {
      id:new Date().getTime(),
      value,
      hasCompleted:false
    };
    let {todoState} = this.state;
    todoState.push(todo);
    this.setState({todoState});
    ev.target.value = '';
  }
  // 删除
  onDestory(todo){
    this.deleteItem((elt)=>(elt.id !== todo.id));
  }
  clearCompleted(){
    this.deleteItem((elt) => (elt.hasCompleted));
  }
  //公共删除方法
  deleteItem(filterFn){
    if(typeof filterFn !== 'function') return;
    let {todoState} = this.state;
    todoState = todoState.filter(filterFn);
    this.setState({todoState})
  }
  render() {
    // eslint-disable-next-line
    let {handleKeyDownPost,onDestory,clearCompleted} = this;
    const {todoState} = this.state;
    let itemMaps = todoState.map((elt,index) => (<Item key={elt.id} onDestory={onDestory} todo={elt}></Item>))
    return (
      <div>
        <header className="header">
          <h1>TODO MVC</h1>
          <input type="text" className="new-todo" onKeyUp={handleKeyDownPost}/>
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all"/>
          <ul className="todo-list">
          {itemMaps}
          </ul>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
