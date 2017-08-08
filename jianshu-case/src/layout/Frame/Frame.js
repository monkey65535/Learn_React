import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav.js';
import Home from '../../view/Home/Home';
import style from './style.scss';
/*
 * components:
 * nav:顶部导航
 * Home： 首页 
 */
class Layout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Nav/>
                <Route path="/" exact component={Home}></Route>
            </div>
        );
    }
}

export default Layout;