import {Route,Redirect} from 'react-router-dom';
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
            myInfo:null,
            signInMsg:null,
            signUpMsg:null,
            hasLoginReq:false
        };
        //绑定Event
        this.signInAjax = this.signInAjax.bind(this);
        this.signUpAjax = this.signUpAjax.bind(this);
        this.clearLoginInfo = this.clearLoginInfo.bind(this);
        this.clearRegisterInfo = this.clearRegisterInfo.bind(this);
        this.initMyInfo = this.initMyInfo.bind(this);
        this.loginOut = this.loginOut.bind(this);
    }
    initMyInfo(myInfo){
        if(myInfo){
            myInfo.avatar = Config.url + myInfo.avatar;
        }
        this.setState({myInfo});
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
            if(re.code === 0){
                this.initMyInfo(re.data);
            }else{
                this.setState({signInMsg:re});
            }
           
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
            if(re.code === 0){
                setTimeout(()=>{
                    this.initMyInfo(re.data);
                },1000)
            }
        });
    }

    /*
     * 用户注销 
     */
    loginOut(ev){
        ev.stopPropagation();
        ev.preventDefault();
        $.post(`${Config.url}/logout`,({code})=>{
            if(code === 0){
                this.initMyInfo(null);
            }
        })
    }
     
    // 清除登录信息
    clearLoginInfo(){
        this.setState({
            signInMsg:null,
            signUpMsg:null
        })
    }
    // 清除注册
    clearRegisterInfo(){
        this.clearLoginInfo();
    }
    componentDidMount(){
        $.post(`${Config.url}/autologin`,(re)=>{
            if(re && re.code === 0){
                this.initMyInfo(re.data);
            }
            this.setState({hasLoginReq:true});
        });
    }
    render(){
        let {signInAjax,signUpAjax,clearLoginInfo,clearRegisterInfo} = this;
        let {signInMsg,signUpMsg,myInfo,hasLoginReq} = this.state;
        if(!hasLoginReq){
            return(<div></div>)
        }
        return (
            <div className={S.layout}>
                <Nav myInfo={this.state.myInfo} loginOut={this.loginOut}/>
                <Route exact path="/" component={Home}/>
                {/*在路由中进行props传递，那么就必须要使用render方法来渲染组件,在子组件接受数据*/}
                <Route exact path="/sign_in" render={(props) => (
                    myInfo ? (<Redirect to="/"/>) : (<SignIn {...{signInAjax,signInMsg,clearLoginInfo}}/>) 
                )}/>
                <Route exact path="/sign_up" render={(props) => (
                    myInfo ? (<Redirect to="/"/>) : (<SignUp {...{signUpAjax,signUpMsg,clearRegisterInfo}}/>) 
                )}/>
            </div>
        );
    }
}
