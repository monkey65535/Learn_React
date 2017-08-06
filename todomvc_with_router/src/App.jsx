import React, {Component} from 'react';
import Item from './components/Item/Item.jsx';
import Footer from './components/Footer/Footer.jsx';
class App extends Component {
  constructor(){
    super();
    this.state = {
      todoState:[],
      inputVal:'',
      checkAll:false
    }
    this.handleKeyDownPost = this.handleKeyDownPost.bind(this);
    this.onDestory = this.onDestory.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }
  //inputChange
  handleInputChange(ev){
    this.setState({
      inputVal:ev.target.value.trim()
    })
  }
  //添加
  handleKeyDownPost(ev){
    if(ev.keyCode!== 13) return;
    let value = this.state.inputVal;
    if(!value) return;
    let todo = {
      id:new Date().getTime(),
      value,
      hasCompleted:false
    };
    let {todoState} = this.state;
    todoState.push(todo);
    this.setState({todoState,inputVal:''});
  }
  // 删除
  onDestory(todo){
    this.deleteItem((elt)=>(elt.id !== todo.id));
  }
  clearCompleted(){
    this.deleteItem((elt) => (!elt.hasCompleted));
  }
  //公共删除方法
  deleteItem(filterFn){
    if(typeof filterFn !== 'function') return;
    let {todoState} = this.state;
    todoState = todoState.filter(filterFn);
    this.setState({todoState})
  }
  //全选
  toggleAll(ev){
    let {checked} = ev.target;
    let {todoState} = this.state;
    todoState = todoState.map((elt) => {
       elt.hasCompleted = checked;
      return elt;
    });
    
    this.setState({todoState});
  }
  //单个选中
  onToggle(checked,todo){
    let {todoState} = this.state;
    todoState = todoState.map((elt) => {
      if(elt.id === todo.id){
        elt.hasCompleted = checked;
      }
      return elt;
    });
     this.setState({todoState});
  }
  render() {
    const {todoState} = this.state;
    let itemMaps = todoState.map((elt,index) => (<Item key={elt.id} onDestory={this.onDestory} todo={elt} onToggle={this.onToggle.bind(this)}></Item>))
    return (
      <div>
        <header className="header">
          <h1>TODO MVC</h1>
          <input type="text" className="new-todo" value={this.state.inputVal} onKeyUp={this.handleKeyDownPost} onInput={this.handleInputChange}/>
        </header>
        <section className="main">
          <input type="checkbox" className="toggle-all" onChange={this.toggleAll}/>
          <ul className="todo-list">
          {itemMaps}
          </ul>
        </section>
        <Footer clearCompleted={this.clearCompleted} todoState={todoState}/>
      </div>
    );
  }
}

export default App;
