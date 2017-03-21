import React from 'react';
import PropsButton from '../PropsButton/PropsButton';
import Events from '../Events/Events';
class UseStage extends React.Component{
    constructor() {
        // 调用积累的所用初始化方法
        super();
        this.state = {
            userName:'lucky',
            isLike:false,
            update:'这里是父页面会被更改的数据',
            string:'11111'
        }
    }
    updateValue(event) {
        //this.setState({update:event.target.value})
        this.setState({update:event.target.value});
    }
    render() {
        setTimeout(() => {
            this.setState({userName:'OH LUCKY'});
        }, 4000)
        return (
            <div className="userState">
                <h1>我是state的使用的案例</h1>
                <p>{this.state.userName}</p>
                <PropsButton props={this.isLike}/>
                <PropsButton isLike={this.isLike}/>
                <p>{this.state.update}</p>
                <Events updateValue={this.updateValue.bind(this)}/>
            </div>
        )
    }
}
export default UseStage;