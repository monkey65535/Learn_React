import {Route} from 'react-router-dom';
import Nav from 'nav/Nav';
import Home from 'view/home/Home.js';
import SignIn from 'view/user/SignIn.js';
import SignUp from 'view/user/SignUp.js';
import S from './style.scss';

import Config from 'config/config.json';

export default class Layout extends React.Component{
    constructor(props){
        super(props);
        //定义用户信息
        this.state = {
            userInfo:null,
            signInMsg:null,
            signUpMsg:null
        };
        //绑定Event
        this.signInAjax = this.signInAjax.bind(this);
        this.signUpAjax = this.signUpAjax.bind(this);
    }

    /*
     * 用户登录
     * params
     * @ reqData 发送的数据，接受一个对象
     * @ reqData.username
     * @ reqData.passw
     */
    signInAjax(reqData){
        $.post(`${Config.url}/login`,reqData,(re)=>{
            this.setState({signInMsg:re});
        });
    }
    /*
     * 用户注册
     * params
     * @ reqData 发送的数据，接受一个对象
     * @ reqData.username
     * @ reqData.passw
     */
    signUpAjax(reqData){
        $.post(`${Config.url}/register`,reqData,(re)=>{
            this.setState({signUpMsg:re});
        });
    }
    render(){
        let {signInAjax,signUpAjax} = this;
        let {signInMsg,signUpMsg} = this.state;
        return (
            <div className={S.layout}>
                <Nav/>
                <Route exact path="/" component={Home}/>
                {/*在路由中进行props传递，那么就必须要使用render方法来渲染组件,在子组件接受数据*/}
                <Route exact path="/sign_in" render={(props) => (<SignIn {...{signInAjax,signInMsg}}/>)}/>
                <Route exact path="/sign_up" render={(props) => (<SignUp {...{signUpAjax,signUpMsg}}/>)}/>
            </div>
        );
    }
}
