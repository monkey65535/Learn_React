import React from 'react';

class propsButton extends React.Component {
    render() {
        return (
            <button>{this.props.isLike ? '喜欢' : '不喜欢'}</button>
        )
    }
}

export default propsButton;