import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Nav from 'nav/Nav.js';
import CardWrap from 'cardWrap/CardWrap.js';
import Home from 'home/Home.js';
import ListContainer from 'ListContainer/ListContainer.js';

require('../semantic/dist/semantic.css');
require('./common/style/main.css');

let data = [
    {
        imgSrc: require('img/matthew.png'),
        name: 'Matt',
        meta: 'Friends',
        desc: 'Matthew is an interior designer living in New York.',
        joined: 2013,
        likeNum: 75
    },
    {
        imgSrc: require('img/molly.png'),
        name: 'Molly',
        meta: 'Coworker',
        desc: 'Molly is a personal assistant living in Paris.',
        joined: 2013,
        likeNum: 35
    },
    {
        imgSrc: require('img/elyse.png'),
        name: 'Elyse',
        meta: 'Coworker',
        desc: 'Elyse is a copywriter working in New York.',
        joined: 2014,
        likeNum: 151
    }
];

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            view: 'listContainer'
        }
        this.changeView = this.changeView.bind(this);
    }

    changeView(view){
        this.setState({
            view
        })
    }

    getChildContext(){
        return {
            et: 'Died'
        }
    }
    render(){
        let {view} = this.state;

        let {data} = this.props;

        let viewComp = null;

        switch (view) {

            case 'list':
                viewComp = <CardWrap data={data}/>
                break;
            case 'home':
                viewComp = <Home/>
                break;
            case 'listContainer':
                viewComp = <ListContainer/>
            default:

        }

        return (
            <div className="ui container">
                <div className="ui dividing"></div>
                <Nav changeView={this.changeView}/>
                {viewComp}
            </div>
        );
    }
}

App.childContextTypes = {
    et: PropTypes.string
}


ReactDOM.render(
    <App data={data}/>,
    document.getElementById('root')
);



if(module.hot){ 
    module.hot.accept()
}
