/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for ServiceCard page
 * @file : ServiceCard.jsx
 * @module : serviceCard Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from "react";
import userService from '../services/shoppingServices';
import { withRouter } from 'react-router-dom';

class ServiceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceArr: []
        }
    }
    componentDidMount() {
        userService().then(res => {
            this.setState({
                serviceArr: res.data.data.data
            })
            console.log("response in get user shoping services", this.state.serviceArr);
        }).catch(err => {
            console.log("err in get user shoping services", err);
        })
        console.log("window.location.href",window.location.pathname);
        
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    render() {
        // const service = this.state.serviceArr.map((key) => {
        const serviceMap = this.state.serviceArr.map(key => {
            return (
                <div className="card">
                    <div> price: ${key.price}per month</div>
                    <div style={{ color: "#0000ff" }}>{key.name}</div>
                    <div>
                        <li>${key.price}/month</li>
                        <li>{key.description}</li>
                    </div>
                </div>
            )
        })
        return (
            window.location.pathname === '/servicepage' ?
                <div className="service-container">
                    <div className="header">
                        <div>
                            <span style={{ fontFamily: "TimesNewRoman", fontSize: "30px", justifyContent: "center", alignItems: "center" }}>Fundoonotes</span>
                        </div>
                    </div>
                    <div className="text-feel">
                        <text className="text">FundooNotes offered. Choose below service to Register.</text>
                    </div>
                    <div className="service-cards">
                        {serviceMap}
                    </div>
                    <span onClick={this.handleLogin} className="base-line">  LogIn Instead</span>
                </div>
                :
                <div className="service-cards">
                    {serviceMap}
                </div>
        )
        // })
    }
}

export default withRouter(ServiceCard)