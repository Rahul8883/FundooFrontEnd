/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for Registration page
 * @file : Registration.jsx
 * @module : Registration Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import userRegister from '../services/userServices'
// import RegistrationPage from "../pages/RegistrationPage";
import ServiceCard from './ServiceCard'
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
            SnackbarOpen: false,
            SnackbarMsg: ""
        }
    }
    SnackbarClose = (e) => {
        this.setState({ SnackbarOpen: false })
    }
    handlefirstNameChange = (event) => {
        console.log("------------->event");
        const firstName = event.target.value;
        this.setState({ firstName: firstName })
    }
    handlelastNameChange = (event) => {
        console.log("------------->event");
        const lastName = event.target.value;
        this.setState({ lastName: lastName })
    }
    handleEmailChange = (event) => {
        console.log("------------->event");
        const email = event.target.value;
        this.setState({ email: email })
    }
    handlePasswordChange = (event) => {
        console.log("------------->event");
        const password = event.target.value;
        this.setState({ password: password })
    }
    handleConfirmPasswordChange = (event) => {
        console.log("------------->event");
        const confirmPassword = event.target.value;
        this.setState({ confirmPassword: confirmPassword })
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    handleSubmit = () => {
        if (this.firstName === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "first Name cann't be Empty..!"
            })
        } else if (this.lastName === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "first Name cann't be Empty..!"
            })
        } else if (this.state.email === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Email cann't be empty..!!"
            })
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            console.log("entered", /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email));
            this.setState({
                openSnackBar: true,
                snackBarMessage: "Invalid Email..!"
            })
        } else if (this.state.password === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Password cann't be empty..!!"
            })
        } else if (this.state.password.length < 6) {
            this.setState({
                openSnackBar: true,
                snackbarMsg: "password must be of atleast 6 characters..!!"
            })
        } else {
            console.log("Registration ture");
            let data = {
                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                'email': this.state.email,
              'password': this.state.password
            }
            console.log("data b4 passsing to backend--------",data);
            
            userRegister.userRegister(data).then((res) => {
                console.log("response in register",res);
        
                localStorage.setItem('email', this.state.email, res.id)
                this.props.history.push('/login');
                this.setState({ snackbarOpen: true, snackbarMsg: "Registration done  successfully!!" })
            }).catch(err => {
                console.log("err in login component ", JSON.stringify(err));
            })
        }
    }
    render() {        
        console.log("location",this.props.location.state.con);
        return (
            <div className="registration-container">
                <Card className="registration-card">
                    <div className="registration-contents">
                        <div>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>F</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>u</span>
                            <span style={{ color: 'orange', fontFamily: 'TimesNewRoman', fontSize: 25 }}>n</span>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>d</span>
                            <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                        </div>
                        <div style={{ color: "purple", fontSize: 25, fontFamily: "TimesNewRoman" }}>Create your Fundoo Account</div>
                        <div>
                            <div className="personal-filed">
                                <div>
                                    <TextField
                                        type="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        id="standard-basic"
                                        label="First Name*"
                                        fullWidth
                                        margin="normal"
                                        value={this.state.firstName}
                                        onChange={this.handlefirstNameChange}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        id="standard-basic"
                                        label="Last Name*"
                                        fullWidth
                                        margin="normal"
                                        value={this.state.lastName}
                                        onChange={this.handlelastNameChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <TextField
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="standard-basic"
                                label="Email id*"
                                fullWidth
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div className="password-field">
                            <div>
                                <TextField
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    id="standard-basic"
                                    label="Password*"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    type="password"
                                    name="confirmpassword"
                                    placeholder="confirmpassword"
                                    id="standard-basic"
                                    label="Confirm Password*"
                                    margin="normal"
                                    fullWidth
                                    value={this.state.confirmPassword}
                                    onChange={this.handleConfirmPasswordChange}
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <ServiceCard nameProps={this.props.location.state.con}
                            idProps={this.props.location.state.id}
                            />
                        </div>
                        <div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="submit-box"
                                    onClick={this.handleSubmit}
                                >
                                    Sign Up
                             </Button>
                            </div>
                            <div>
                                <div>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2" onClick={this.handleLogin}>
                                                SignIn instead
                                  </Link>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    message={<span id="message-id">{this.state.snackbarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }
}

export default withRouter(Registration)