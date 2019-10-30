import React, { Component } from 'react';
import Forgot from '../component/Forgot'
export default class ForgotPage extends Component {
    render() {
        return (
            <div>
                <Forgot props={this.props} />
            </div>
        )
    }
}