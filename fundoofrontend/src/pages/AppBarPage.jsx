/******************************************************************************************
 * @purpose : Accessing AppBar Component here  
 * @file : AppbarPage.jsx
 * @module :  Access AppBar.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from 'react';
import AppBarComponent from '../component/AppBarComponent';
export default class AppBarPage extends Component {
    render() {
        return (
            <div>
                <AppBarComponent props={this.props} />
            </div>
        )
    }
}