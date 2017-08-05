import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{0}</strong>
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
                <button className="clear-completed">
                    clear all completed
                </button>
            </footer>
        );
    }
}

export default Footer;