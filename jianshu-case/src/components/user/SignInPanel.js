import React, {Component} from 'react';
import S from './style.scss';
import Validation from '../../common/util/validation.js';

let propTypes = {
    signInAjax:PT.func,
    signInMsg:PT.object,
    clearLoginInfo:PT.func
}

class SignInPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            nameErr:false,
            pwdErr:false
        }
        this.validator = new Validation();

        this.validator.addByValue('username',[
            {strategy: 'isEmpty', errorMsg: '用户名不能为空'},
            {strategy: 'hasSpace', errorMsg: '用户名不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '最长为6'}
        ]);

        this.validator.addByValue('passw', [
            {strategy: 'isEmpty', errorMsg: '密码不能为空'},
            {strategy: 'hasSpace', errorMsg: '密码不能有空格'},
            {strategy: 'maxLength:6', errorMsg: '最长为6'}
        ]);


        this.EventHandleNameChange = this.EventHandleNameChange.bind(this);
        this.EventHandlePasswordChange = this.EventHandlePasswordChange.bind(this);
        this.EventHandleSubmit = this.EventHandleSubmit.bind(this);
    }
    EventHandleNameChange(ev){
        let value = ev.target.value.trim();
        let msg = this.validator.valiOneByValue('username',value);
        this.setState({username:value,nameErr:msg});
    }
    EventHandlePasswordChange(ev){
        let {target} = ev;
        let msg = this.validator.valiOneByValue('passw', target.value);
        this.setState({
            password: target.value,
            pwdErr: msg
        });
    }
    EventHandleSubmit(ev){
        ev.stopPropagation();
        ev.preventDefault();

        //首先执行一次表单验证
        let {validator} = this;
        let {nameDom, passwDom} = this.refs;
        let nameErr = this.validator.valiOneByValue('username', nameDom.value);
        let passwErr = this.validator.valiOneByValue('passw', passwDom.value);
        this.setState({
            nameErr, passwErr
        });

        //验证完成之后调用父组件传递的登陆方法
        if(!nameErr && !passwErr){
            this.props.signInAjax({
                username:nameDom.value,
                passw:passwDom.value
            })
        }
    }
    componentWillUnmount(){
        this.props.clearLoginInfo();
    }
    render() {
        let {username,password,nameErr,pwdErr} = this.state;

        let { signInMsg } = this.props;
        
        let nameErrMsg = nameErr ? (<p className={S.err}>{nameErr}</p>) : null;
        let pwdErrMsg = pwdErr ? (<p className={S.err}>{pwdErr}</p>) : null;
        
        let resInfo = null;
        if(signInMsg && signInMsg.code !== 0){
            resInfo = (
                <div className="ui message error">
                    <p>{signInMsg.msg}</p>
                </div>
            );
        }
        return (
            <div className={S.sign_panel}>
            {resInfo}
                <form className="ui form" onSubmit={this.EventHandleSubmit}>
                    <div className={`field ${nameErr ? 'error' : ''}`}>
                        <input type="text" placeholder="用户名" value={username} onChange={this.EventHandleNameChange} ref="nameDom"/>
                        {nameErrMsg}
                    </div>
                    <div className={`field ${pwdErr ? 'error' : ''}`}>
                        <input type="text" placeholder="密码" value={password} onChange={this.EventHandlePasswordChange} ref="passwDom"/>
                        {pwdErrMsg}
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">登录</button>
                    </div>
                </form>
            </div>
        );
    }
}
SignInPanel.propTypes = propTypes;
export default SignInPanel;