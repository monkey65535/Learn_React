import React from 'react';

class Comment extends React.Component{
    constructor() {
        super();
        this.state = { timeString: '' };
    }
    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this),5000);
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }
    _updateTimeString() {
        const comment = this.props.item;
        const duration = (+Date.now() - comment.commentTime) / 1000;
        let timeString = duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`;
        this.setState({ timeString: timeString})
    }
    _getProcessedContent(content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    handleDeleteComment() {
        if(this.props.handleDelete){
            this.props.handleDelete(this.props.index);
        }
    }
    render() {
        return(<div className='comment'>
        <div className='comment-user'>
          <span>{this.props.item.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{__html:this._getProcessedContent(this.props.item.commentText)}}/>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
            删除
        </span>
      </div>);
    }
}
export default Comment;