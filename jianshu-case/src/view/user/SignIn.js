import React, { Component } from 'react';
import EntryPanel from '../../components/user/Panel';
import SignInPanel from '../../components/user/SignInPanel';
class SignIn extends Component {
    render() {
        return (
            <EntryPanel>
                <SignInPanel/>
            </EntryPanel>
        );
    }
}

export default SignIn;