import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Button, Card } from '@material-ui/core/';
import {withRouter} from 'react-router-dom'
class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
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
                            <div style={{ color: "red", fontSize: 25 }}>Find your Email</div>
                        </div>
                        <div style={{ color: "seagreen", fontSize: 25, fontFamily: "TimesNewRoman" }}>Enter your recovery email id</div>
                        <div className="header-area">

                            <div>
                                <div>
                                    <TextField
                                        label="Email id*"
                                        type="email"
                                        name="Email id"
                                        placeholder="Email"
                                        // variant="outlined"
                                        fullWidth

                                        value={this.state.email}
                                    />
                                </div>

                                <div className="forgot-button">
                                    <div >
                                        <Button
                                            type="submit"
                                            // fullWidth
                                            variant="contained"
                                            color="secondary"
                                            className="submit-box"

                                        >
                                            Back
                             </Button>
                                    </div>
                                    <div>
                                        <Button
                                            type="submit"
                                            // fullWidth
                                            variant="contained"
                                            color="secondary"
                                            className="submit-box"

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
export default withRouter(Forgot)