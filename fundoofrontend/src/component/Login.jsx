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
import { Button, Card } from '@material-ui/core/';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleForgot = () => {
        this.props.history.push('/forgot')
    }
    handleRegister = () => {
        this.props.history.push('/register')
    }
    render() {
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
                                id="standard-basic"
                                label="Email id*"

                                fullWidth
                            />
                        </div>
                        <div>
                            <TextField
                                type="password"
                                name="password"
                                placeholder="password"
                                id="standard-basic"
                                label="Password*"
                                margin="normal"
                                fullWidth

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
                                className="submit-box"

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


            </div>

        );
    }
}
export default withRouter(Login)