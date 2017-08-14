import React, { Component } from 'react';
import EntryPanel from '../../components/user/Panel';
import SignUpPanel from '../../components/user/SignUpPanel';
let propTypes = {
    signUpAjax:PT.func,
    signUpMsg:PT.object,
    clearRegisterInfo:PT.func
}
class SignUp extends Component {
    render() {
        let {signUpAjax,signUpMsg,clearRegisterInfo} = this.props;
        return (
            <EntryPanel>
                <SignUpPanel {...{signUpAjax,signUpMsg,clearRegisterInfo}}/>
            </EntryPanel>
        );
    }
}
SignUp.propTypes = propTypes;
export default SignUp;