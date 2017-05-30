import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.Component {

    static PropTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props)
        this.state = {
            username: props.username, // 从 props 上取 username 字段
            content: ''
        }
    }
    componentDidMount() {
        this
            .textarea
            .focus();
    }

    handleUserNameBlur(event) {
        if (this.props.onUserNameInputBlur) {
            this
                .props
                .onUserNameInputBlur(event.target.value);
        }
    }

    handleUserNameChange(event) {
        this.setState({username:event.target.value})
    }

    handleContentChange(event) {
        this.setState({content:event.target.value});
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this.props
                .onSubmit({
                    username: this.state.username,
                    content: this.state.content,
                    createdTime: + new Date()
                })
            this.setState({content: ""});
        }
    }

    render() {
        return (
            <div className="Comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this
                            .handleUserNameChange
                            .bind(this, 'username')}
                            placeholder="请输入用户名"/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容:</span>
                    <div className="comment-field-input">
                        <textarea
                            cols="30"
                            rows="10"
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.commentText}
                            onChange={this
                            .handleContentChange
                            .bind(this)}
                            placeholder="请填写评论"></textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this
                        .handleSubmit
                        .bind(this)}>发布</button>
                </div>
            </div>
        );
    }
}
export default CommentInput;