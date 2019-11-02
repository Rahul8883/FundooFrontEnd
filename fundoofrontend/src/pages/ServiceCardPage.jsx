/******************************************************************************************
 * @purpose : Accessing ServiceCard Component here  
 * @file : servicecardPage.jsx
 * @module :  Access serviceCard.jsx
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from 'react';
import ServiceCard from '../component/ServiceCard'
export default class ServiceCardPage extends Component {
    render() {
        return (
            <div>
                <ServiceCard props={this.props} />
            </div>
        )
    }
}