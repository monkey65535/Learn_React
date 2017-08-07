import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import style from './style.scss';
class Layout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Nav/>
            </div>
        );
    }
}

export default Layout;