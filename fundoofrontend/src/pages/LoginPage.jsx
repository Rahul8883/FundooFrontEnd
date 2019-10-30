import React, { Component } from 'react';
import Login from '../component/Login'
export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Login props={this.props} />
            </div>
        )
    }
}