import React, { Component } from 'react';
import ListData from './ListData';
import List from './lisr';

class listContainer extends Component {
    render() {
        let ListMap = ListData.map((e,i)=>(<List key={i} {...e}></List>))
        return (
            <ul>
                {ListMap}
            </ul>
        );
    }
}

export default listContainer;