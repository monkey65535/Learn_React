import React from 'react';

class CommentInput extends React.Component{
    constructor() {
        super();
        this.state = {
            username:'',
            commentText:''
        }
    }
    componentWillMount() {
        const _this = this;
        this.setState({
            username:_this._getUserName('username')
        })
    }
    componentDidMount () {
        console.log(this.textarea)
        this.textarea.focus();
    }
    _setUserName(key,value){
        window.localStorage.setItem(key,value);
    }
    _getUserName(key){
        return window.localStorage.getItem(key);
    }
    handleChangeEvent(key,event) {
        this.setState({[key]:event.target.value});
        if(key === 'username'){
            this._setUserName(key,event.target.value);
        }
    }
    handleSubmit() {
        if(this.props.onSubmit){
            const {username,commentText} = this.state;
            //验证
            if(username && commentText){
                
                this.props.onSubmit({username,commentText,commentTime:new Date().getTime()});
            }else{
                alert('请不要留空');
            }
            this.setState({commentText:""});
        }
    }
    render() {
        return(<div className="Comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名:</span>
                <div className="comment-field-input">
                    <input type="text"  value={this.state.username} onChange={this.handleChangeEvent.bind(this,'username')} placeholder="请输入用户名"/>
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容:</span>
                <div className="comment-field-input">
                    <textarea cols="30" rows="10" ref={(textarea) => this.textarea = textarea} value={this.state.commentText} onChange={this.handleChangeEvent.bind(this,'commentText')} placeholder="请填写评论"></textarea>
                </div>
            </div>
            <div className='comment-field-button'>
                <button onClick={this.handleSubmit.bind(this)}>发布</button>
            </div>
        </div>);
    }
}
export default CommentInput;