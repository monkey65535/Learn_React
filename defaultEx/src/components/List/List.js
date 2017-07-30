import React, {Component} from 'react';

import ListData from './PageDate.js';

class List extends Component {
    render() {
        return (
            <div>
                <div className="listContent">
                    <h2>一级菜单标题</h2>
                    <ul>
                    
                    </ul>
                </div>
            </div>
        );
    }
}

class liList extends Component {
    render() {
        return (
            <li>
                一级菜单内容
                <ul>
                   
                </ul>
            </li>
        );
    }
}

export default List;