import React from 'react';

class Comment extends React.Component{
    render() {
        return(<div>
            <span>{this.props.item.username}</span>
            <span>{this.props.item.commentText}</span>
        </div>);
    }
}
export default Comment;