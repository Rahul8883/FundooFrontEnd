/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for Login page
 * @file : Login.jsx
 * @module : Login Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import ServiceCard from './ServiceCard';
import LoginPage from './Login'
export class LoginServicecard extends Component {
    render() {
        return (
            <div className="loginContainerPage">
                <div className="loginPage">
                    
                       <LoginPage/>
                
                </div>
                <div className="servicePage">
                    <Card>
                        <ServiceCard />
                    </Card>
                </div>
            </div>
        )
    }
}

export default LoginServicecard
