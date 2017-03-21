import React from 'react';
class propsButton extends React.Component {
    clickEvent() {
        let btn2 = this.refs.btn;
        console.log(btn2,2);
    }
    render() {
        return (
             <button id="btn" ref="btn" onClick={this.clickEvent.bind(this)}>{this.props.isLike ? '喜欢' : '不喜欢'}</button>
        )
    }
}

export default propsButton;

propsButton.propTypes = {
    isLike: React.PropTypes.bool
}
