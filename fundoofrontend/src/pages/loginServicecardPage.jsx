/******************************************************************************************
 * @purpose : Accessing Forgot Component here  
 * @file : ForgotPage.jsx
 * @module :  Access Forgot.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from 'react';
import LoginServiceCard from '../component/LoginServicecard'
export default class loginServicecardPage extends Component {
    render() {
        return (
            <div>
                <LoginServiceCard props={this.props} />
            </div>
        )
    }
}