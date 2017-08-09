import React, { Component } from 'react';
import EntryPanel from '../../components/user/Panel';
import SignUpPanel from '../../components/user/SignUpPanel';
class SignUp extends Component {
    render() {
        return (
            <EntryPanel>
                <SignUpPanel/>
            </EntryPanel>
        );
    }
}

export default SignUp;