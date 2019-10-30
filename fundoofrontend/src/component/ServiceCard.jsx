import React, { Component } from "react";
import getServices from '../services/shoppingServices';
import { withRouter } from 'react-router-dom';
class ServiceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        getServices().then(res=>{
            console.log("response in get user services",res);


        }).catch(err=>{
            console.log("err in get user services",err); 
        })
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    render() {
        return (
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
                    <div class="container1">
                        <div className="card">

                        </div>
                    </div>
                    <div className="container-20">
                        <div className="card">

                        </div>
                    </div>
                </div>
                <span onClick={this.handleLogin} className="base-line">  LogIn Instead</span>
            </div>
        )
    }
}

export default withRouter(ServiceCard)