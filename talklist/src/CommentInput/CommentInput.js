import React from 'react';

class CommentInput extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            commentText:''
        }
    }
    changeEventHandle(key,event) {
        this.setState({[key]:event.target.value})
    }
    handldSubmit() {
        if(this.props.onSubmit){
            const {username,commentText} = this.state;
            //验证
            if(username && commentText){
                this.props.onSubmit({username,commentText});
            }else{
                alert('请不要留空');
            }
        }
        this.setState({commentText:""});
    }
    render() {
        return(<div className="Comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名:</span>
                <div className="comment-field-input">
                    <input type="text" value={this.state.username} onChange={this.changeEventHandle.bind(this,'username')} placeholder="请输入用户名"/>
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容:</span>
                <div className="comment-field-input">
                    <textarea cols="30" rows="10" value={this.state.commentText} onChange={this.changeEventHandle.bind(this,'commentText')} placeholder="请填写评论"></textarea>
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handldSubmit.bind(this)}>发布</button>
            </div>
        </div>);
    }
}
export default CommentInput;