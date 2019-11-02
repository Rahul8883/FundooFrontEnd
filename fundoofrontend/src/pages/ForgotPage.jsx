/******************************************************************************************
 * @purpose : Accessing Forgot Component here  
 * @file : ForgotPage.jsx
 * @module :  Access Forgot.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
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