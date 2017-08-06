import React, { Component } from 'react';
import{PropTypes} from 'prop-types';
let propTypes = {
    clearCompleted:PropTypes.func
}
class Footer extends Component {
    constructor(props){
        super(props)
        this.heandleClear = this.heandleClear.bind(this);
    }
    heandleClear(){
        this.props.clearCompleted();
    }
    render() {
        let checkCount = this.props.todoState.filter((elt) => (elt.hasCompleted));
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{checkCount.length}</strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/All">All</a>
                    </li>
                    <li>
                        <a href="#/Active">Active</a>
                    </li>
                    <li>
                        <a href="#/Computed">Computed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.heandleClear}>
                    clear all completed
                </button>
            </footer>
        );
    }
}
Footer.propTypes = propTypes;
export default Footer;