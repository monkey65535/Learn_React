import React, { Component } from 'react';
import {PropTypes } from 'prop-types';
let porpTypes = {
    todo:PropTypes.object,
    onDestory:PropTypes.func
}
class Item extends Component {
    constructor(props){
        super(props);
    }
    deleteHandle(todo){
        const {onDestory} = this.props;
        onDestory(todo);
    }
    render() {
        const {todo} = this.props;
        return (
            <li>
                <div className="view">
                    <input type="checkbox" className="toggle"/>
                    <label>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={this.deleteHandle.bind(this,todo)}></button>
                    <input type="text" className="edit"/>
                </div>
            </li>
        );
    }
}
Item.porpTypes = porpTypes;
export default Item;