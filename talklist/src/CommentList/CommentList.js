import React from 'react';
import Comment from '../Comment/Comment';
class CommentList extends React.Component{
    render() {
        const {listItem} = this.props;
        let items = listItem.map((item,key) => (<Comment item={item} key={key}/>));
        return(<div>
            {items}
        </div>);
    }
    static defaultProps = {
        listItem:[]
    }
}
export default CommentList;