import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*
 * 作者组件，接受一个对象，其中参数为作者头像和名称 
 */
class Author extends Component {
    render() {
        let {avatar,user_name} = this.props;
        return (
            <div className="item">
                <Link to="/" className="ui mini avatar image">
                    <img src={avatar} alt=""/>
                </Link>
                <div className="content">
                    <div className="header">
                        {user_name}
                    </div>
                </div>
            </div>
        );
    }
}

export default Author;