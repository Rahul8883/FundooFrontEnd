import React, { Component } from 'react';
import Registration from '../component/Registration'
export default class RegistrationPage extends Component {
    render() {
        return (
            <div>
                <Registration props={this.props} />
            </div>
        )
    }
}