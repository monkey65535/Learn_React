import React from 'react';
class Life extends React.Component{
    componentWillMount(){
        console.log('Life - 组件加载之前')
    }
    componentDidMount() {
        console.log('Life -组件加载完毕')
    }
    render() {
        return (
            <p>组件的声明周期</p>
        )
    }
}
export default Life;