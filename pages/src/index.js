import React from 'react';
import ReactDOM from 'react-dom';


import IndexBody from './components/Body/Body'
import ComponentHeader from './components/Header/Header';
import ComponentFooter from './components/Footer/Footer';
import Lift from './components/Life/Life';
import UseState from './components/UseState/UseState';
import Lists from './components/lists/lists';
import Card from './components/card/Card';


class Index extends React.Component {
    render() {
        return (
            <div id="app">
                <ComponentHeader/>
                <Lift/>
                <UseState/>
                <ComponentFooter/>
                <Lists/>
                <Card>
                    <div>
                        <h2>React.js 小书</h2>
                        <div>开源、免费、专业、简单</div>
                        订阅：<input />
                    </div>
                </Card>
            </div>
        )
    }
}
ReactDOM.render(<Index/>, document.getElementById('root'));