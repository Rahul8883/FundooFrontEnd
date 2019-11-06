/******************************************************************************************
 * @purpose : Accessing registration Component here  
 * @file : RegistrationPage.jsx
 * @module :  Access registration.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from 'react';
import Registration from '../component/Registration'
export default class RegistrationPage extends Component {
    render() {
        console.log("service props data",this.props);
        
        return (
            <div>
                <Registration props={this.props} />
            </div>
        )
    }
}