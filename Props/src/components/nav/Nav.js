import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        console.log('nav');
        let {changeView} = this.props;

        return (
            <div className="ui menu">
                <div className="header item">Noods</div>
                <div
                    className="item"
                    onClick = {()=>{changeView('home')}}
                >首页</div>
                <div
                    className="item"
                    onClick={()=>{changeView('list')}}
                >列表</div>
                <div
                    className="item"
                    onClick={()=>{changeView('listContainer')}}
                >菜单</div>
                <div className="item right">Login</div>
            </div>
        )
    }
}
