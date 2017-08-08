import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Author from './Author.js';
import S from './style.scss';
class AuthorList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {authors} = this.props;
        let authorLists = authors.map((elt)=>(<Author {...elt} key={elt.id}></Author>))
        return (
            <div className={S.recommend}>
                <div className={S.title}>
                    <span>作者列表</span>
                </div>
                <div className="ui items">
                    {authorLists}
                </div>
            </div>
        );
    }
}
export default AuthorList;