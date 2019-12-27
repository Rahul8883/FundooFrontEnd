/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for Login page
 * @file : Login.jsx
 * @module : Login Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card, Input } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import userLogin from '../services/userServices';
import ServiceCard from './ServiceCard'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Snackbar from '@material-ui/core/Snackbar';
import InputAdornment from '@material-ui/core/InputAdornment'
const url = "http://fundoonotes.incubation.bridgelabz.com/"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            snackbarOpen: false,
            snackbarMsg: "",
            locState: ""
        };
    }
    componentDidMount() {
        if (this.props.location.state !== undefined) {
            this.setState({
                locState: this.props.location.state.status
            })
        }
    }
    snackbarClose = (e) => {
        this.setState({ snackbarOpen: false })
    }
    handleEmailChange = (event) => {
        console.log("------------->event");
        const email = event.target.value;
        this.setState({
            email: email
        })
    }
    handleVisibility = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    handlePasswordChange = (event) => {
        console.log("-------------->event");
        const password = event.target.value;
        this.setState({
            password: password
        })
    }
    handleForgot = () => {
        this.props.history.push('/forgot')
    }
    handleRegister = () => {
        this.props.history.push('/register')
    }
    handleSubmit = () => {
        if (this.state.email === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Email cann't be empty..!!"
            })
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email)) {
            console.log("entered", /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email));
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Invalid Email..!"
            })
        } else if (this.state.password === "") {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "Password cann't be empty..!!"
            })
        } else if (this.state.password.length < 6) {
            this.setState({
                snackbarOpen: true,
                snackbarMsg: "password must be of atleast 6 characters..!!"
            })
        } else {
            console.log("Login ture");
            let data = {
                'email': this.state.email,
                'password': this.state.password
            }
            userLogin.userLogin(data).then((res) => {
                this.setState({
                    snackbarOpen: true,
                    snackbarMsg: "Login successfully!!"
                })
                console.log("res in login---------", res);
                localStorage.setItem('firstName', res.data.firstName);
                localStorage.setItem('lastName', res.data.lastName);
                localStorage.setItem('email', res.data.email)
                localStorage.setItem('imageUrl', url + res.data.imageUrl)
                localStorage.setItem('token', res.data.id)
                localStorage.setItem("userId", res.data.userId)
                this.props.history.push('/dashboard');
            }).catch(err => {
                console.log("err in login component ", err);
            })
        }
    }
    render() {
        console.log("props in login render", this.props.location.state);
        console.log("render state", this.state.locState);
        var cartId = ''
        if (this.props.location.state !== undefined) {
            cartId = this.props.location.state.cartId        }
        return (
            <div className="login-container">

                <Card className="login-card">
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
                            <div style={{ color: "red", fontSize: 25 }}>Sign In</div>
                        </div>
                        <div style={{ color: "seagreen", fontSize: 25, fontFamily: "TimesNewRoman" }}>Continue to fundoo</div>
                        <div>
                            <TextField
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                label="Email id*"

                                fullWidth
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div>
                            <Input
                                type={!this.state.visible ? "password" : "text"}
                                name="password"
                                placeholder="Password*"
                                id="password"
                                label="Password*"
                                margin="normal"
                                fullWidth

                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton onClick={this.handleVisibility}>
                                            {!this.state.visible ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }

                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                        </div>

                        <div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                onClick={this.handleSubmit}
                            >
                                SignIn
                             </Button>
                            <div>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" onClick={this.handleRegister}>
                                            Don't have an account Sign Up
                                  </Link>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" onClick={this.handleForgot}>
                                            Forgot password
                                  </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Card>
                {
                    this.state.locState === "Selected" ?
                        <Card className="login-card"
                            style={{
                                backgroundColor
                                    : "hsl(189, 24%, 61%)"
                            }}
                        >
                            <div>service</div>
                            {console.log("ughfdasugfhusghasjgh", this.state.locState)}
                            <ServiceCard

                                // cartProps={true}
                                // status={this.state.locState}
                                // color={color}
                                cartId={cartId}
                                cartProps={true}
                                // status={status}
                                // propsColor={color}
                                // propsProductId={productId}
                                status={localStorage.getItem('status')}
                                propsColor={localStorage.getItem('color')}
                                propsProductId={localStorage.getItem('pId')}
                            />

                        </Card> : null
                }
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}
                    message={<span id="message-id">{this.state.snackbarMsg}</span>}
                    action={[
                        <IconButton
                            onClick={this.handleClose}
                        >
                            <CloseIcon onClick={this.snackbarClose} />
                        </IconButton>
                    ]}
                />

            </div>

        );
    }
}
export default withRouter(Login)