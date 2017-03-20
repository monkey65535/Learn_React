import React from 'react';
class Events extends React.Component {
    render() {
        return (
            <div className="events-prop">
                <p>子页面输入数据,父页面接收数据并修改页面值</p>
                <input type="text" onChange={this.props.updateValue}/>
            </div>)
    }
}
export default Events;