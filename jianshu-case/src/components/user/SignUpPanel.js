import React, {Component} from 'react';
import S from './style.scss';
import Validation from '../../common/util/validation.js';
class SignUpPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            repeatPwd:'',
            nameErr:false,
            pwdErr:false,
            repPwdErr:false
        };

        this.validator = new Validation();

        this.validator.addByValue('username',[
            {
                strategy:'isEmpty',
                errorMsg:'用户名不能为空'
            },
            {
                strategy:'hasSpace',
                errorMsg:'用户名不能有空格'
            },
            {
                strategy:'maxLength:6',
                errorMsg:'长度最大为6'
            }
        ]);

        this.validator.addByValue('password',[
            {
                strategy:'isEmpty',
                errorMsg:'密码不能为空'
            },
            {
                strategy:'hasSpace',
                errorMsg:'密码不能有空格'
            },
            {
                strategy:'maxLength:6',
                errorMsg:'长度最大为6'
            }
        ]);

        this.EventHandleNameChange = this.EventHandleNameChange.bind(this);
        this.EventHandlePasswordChange = this.EventHandlePasswordChange.bind(this);
        this.EventHandleRepeatPasswordChange = this.EventHandleRepeatPasswordChange.bind(this);
    }
    EventHandleNameChange(ev){
        let value = ev.target.value.trim();
        let msg = this.validator.valiOneByValue('username',value);
        this.setState({username:value,nameErr:msg});
    }
    EventHandlePasswordChange(ev){
        let pwd = ev.target.value.trim();
        let msg = this.validator.valiOneByValue('password',pwd);
        this.setState({password:pwd,pwdErr:msg});
        if(this.state.repPwdErr){
            this.EventHandleRepeatPasswordChange();
        }
    }
    EventHandleRepeatPasswordChange(ev){
        let {passwDom,cfPasswDom} = this.refs;
        let msg = passwDom.value.trim() === cfPasswDom.value.trim() ? '' : '两次输入的 密码不一致';
        this.setState({repeatPwd:cfPasswDom.value.trim(),repPwdErr:msg});
    }
    render() {
        let {username,password,repeatPwd,nameErr,pwdErr,repPwdErr} = this.state;
        let nameErrMsg = nameErr ? (<p className={S.err}>{nameErr}</p>) : null;
        let pwdErrMsg = pwdErr ? (<p className={S.err}>{pwdErr}</p>) : null;
        let rePwdErrMsg = repPwdErr ? (<p className={S.err}>{repPwdErr}</p>) : null;
        return (
            <div className={S.sign_panel}>
                <form className="ui form">
                    <div className={`field ${nameErrMsg ? 'error' : ''}`}>
                        <input type="text" placeholder="用户名" value={username} onChange={this.EventHandleNameChange}  ref="nameDom"/>
                        {nameErrMsg}
                    </div>
                    <div className={`field ${pwdErrMsg ? 'error' : ''}`}>
                        <input type="text" placeholder="密码" value={password} onChange={this.EventHandlePasswordChange} ref="passwDom"/>
                        {pwdErrMsg}
                    </div>
                    <div className={`field ${rePwdErrMsg ? 'error' : ''}`}>
                        <input type="text" placeholder="确认密码" value={repeatPwd} onChange={this.EventHandleRepeatPasswordChange} ref="cfPasswDom"/>
                        {rePwdErrMsg}
                    </div>
                    <div className="field">
                        <button type="submit" className="ui button fluid primary">注册</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpPanel;