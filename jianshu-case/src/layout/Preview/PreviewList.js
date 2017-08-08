/*
 *  PreviewList 无状态组件，接受一个数组，返回对应的preview列表
 *  params:LIST
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import S from './style.scss';
import Preview from './Preview.js';
class PreviewList extends Component {
    render() {
        let {previews} = this.props;
        let PreList = previews.map((elt)=>(<Preview {...elt} key={elt.id}></Preview>))
        return (
            <div>
                {PreList}
            </div>
        );
    }
}

export default PreviewList;
