import React from 'react';
import Comment from './Comment';
class CommentList extends React.Component{
    static defaultProps = {
        listItem:[]
    }
    handleDelete(index) {
        if(this.props.commentDelete){
            this.props.commentDelete(index);
        }
    }
    render() {
        const {listItem} = this.props;
        let items = listItem.map((item,key) => (<Comment item={item} key={key} index={key} handleDelete={this.handleDelete.bind(this)}/>));
        return(<div>
            {items}
        </div>);
    }
}
export default CommentList;