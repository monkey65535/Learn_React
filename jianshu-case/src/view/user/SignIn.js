import React, {Component} from 'react';
import EntryPanel from '../../components/user/Panel';
import SignInPanel from '../../components/user/SignInPanel';

// 接受父组件传递过来的signIn方法
/*
 * props验证，signInAjax func
 */

let propTypes = {
    signInAjax: PT.func,
    signInMsg:PT.object
}
class SignIn extends Component {
    render() {
        let { signInAjax,signInMsg } = this.props;
        return (
            <EntryPanel>
                <SignInPanel {...{signInAjax,signInMsg}}/>
            </EntryPanel>
        );
    }
}

SignIn.propTypes = propTypes;
export default SignIn;