/******************************************************************************************
 * @purpose : Accessing login Component here  
 * @file : LoginPage.jsx
 * @module :  Access Login.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
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