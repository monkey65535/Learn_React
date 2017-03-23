import React from 'react';
import ReactDom from 'react-dom';
import {Router,route,hashHistory} from 'react-touter';  

import Index from './index';
import Body from './components/Body/Body';
class RouterConfig extends React.Component() {
    render() {
        return (
            //替换index,变成了程序的入口
            <Router history={hashHistory}>
                <Route component={Index} path='/'></Route>
                <Route component={Body} path="body"></Route>
            </Router>
        );
    }
};