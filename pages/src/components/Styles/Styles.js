import React from 'react';
// 定义一个内联样式

class Styles extends React.Component{
    constructor() {
        super();
        this.state = {
            colorChange:true
        }
    };
    switchHeader() {
        this.setState({
            colorChange:!this.state.colorChange
        })
    };
    render() {
        const HeaderStyle = {
            background:(this.state.colorChange) ? '#333' : '#999',
            color:'#fff',
            paddingTop:'10px',
            paddingBottom:'20px'
        }
        return (
            <header style={HeaderStyle} onClick={this.switchHeader.bind(this)}>
                <h1>这里是一个很大的标题标题标题</h1>
            </header>
        );
    };
}
export default Styles;