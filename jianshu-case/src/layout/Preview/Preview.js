import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import S from './style.scss';
/*
 * Preview  每个列表中的每个模块,无状态组件
 * @param {*} props
 */
class Preview extends Component {
    render() {
        let {preview,article_title,createdAt,user} = this.props;
        createdAt = new Date(createdAt).toLocaleString();
        return (
            <div className={`${S.note}`}>
                <div className="ui divider hidden"></div>
                <div className={`${S.content}`}>
                    <div className={`${S.author}`}>
                        <Link to="/" className="avatar">
                            <img src={`http://www.noods.me${user.avatar}`} alt="" className="ui avatar image"/>
                        </Link>
                        <div className={`${S.name}`}>
                            <Link to="/">{user.user_name}</Link>
                            <span className="time">
                                {createdAt}
                            </span>
                        </div>
                    </div>
                    <Link to="/" className={S.title}>
                    {article_title}
                    </Link>
                    <p className={S.abstract}>
                       {preview}
                    </p>
                </div>
            </div>
        );
    }
}

export default Preview;