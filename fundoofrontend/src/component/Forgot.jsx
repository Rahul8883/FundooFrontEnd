/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for Forgot page
 * @file : Forgot.jsx
 * @module : Forgot Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import { withRouter } from 'react-router-dom';
import userServices from '../services/userServices';
class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }
    handleLogin=()=>{
        this.props.history.push('/login')
    }
    handlerForgot=()=>{
        console.log("Entered in handle Reset");
        userServices.userForgot(this.state.email).then((res)=>{
            console.log("Forgot in process..", res);
        }).catch((err)=>{
            console.log("Error in Forgot Component..");
        })
    }
    handleEmailChange = (event) => {
        console.log("------------->event");
        const email = event.target.value;
        this.setState({
            email: email
        })
    }
    render() {
        return (
            <div className="forgot-container">
                <Card className="forgot-card">
                    <div className="login-contents">
                        <div>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>F</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>u</span>
                            <span style={{ color: 'orange', fontFamily: 'TimesNewRoman', fontSize: 25 }}>n</span>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>d</span>
                            <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                        </div>
                        <div>
                            <div className="MailFind">Find your Email</div>
                        </div>
                        <div className="Recovery">Enter your recovery email id</div>
                        <div className="header-area">
                            {/* TextField Where we can write user gmail */}
                            <div>
                                <div>
                                    <TextField
                                        label="Email id*"
                                        type="email"
                                        name="Email id"
                                        placeholder="Email"
                                        fullWidth
                                        id="standard-basic"
                                        value={this.state.email}
                                        onChange={this.handleEmailChange}
                                    />
                                </div>
                                <div className="forgot-button">
                                    <div >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            className="submit-box"
                                            onClick={this.handleLogin}
                                        >
                                            Back
                             </Button>
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            className="submit-box"
                                            
                                            onClick={this.handlerForgot}
                                        >
                                            Next
                             </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
// Exporting Forgot with react router DOM 
export default withRouter(Forgot)