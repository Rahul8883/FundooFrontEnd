import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import RegistrationPage from "../pages/RegistrationPage";
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: ""
        };
    }
    render() {
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
                                />
                            </div>
                            <div>
                                <TextField
                                    type="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="confirmpassword"
                                    id="standard-basic"
                                    label="Confirm Password*"
                                    margin="normal"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="contents">
                            <div class="container3">
                                <div className="card-1">

                                </div>
                            </div>
                            <div className="container-4">
                                <div className="card-1">

                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="submit-box"
                                >
                                    Sign Up
                             </Button>
                            </div>
                            <div>
                                <div>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2" >
                                                SignIn instead
                                  </Link>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default withRouter(Registration)