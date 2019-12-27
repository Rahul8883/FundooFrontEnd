import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { withRouter } from 'react-router-dom';
import { Divider, Card } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBarComponent from '../component/AppBarComponent'
const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
};
export class shoppingCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeStep: 0,
            column: [
                { title: 'signIn', field: 'signIn' },
                { title: "review", field: "review" },
                { title: "compleate", field: "compleate" },
            ]

        }
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };
    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <AppBarComponent />
                <div className="Main_div_Shop">
                    <div className="sub_div_shop">
                        <div className="stepper_Main">
                            <div className="fundoo_">fundooNotes</div>
                            <div className="stepper_Icon" style={{marginTop:"5%"}}>

                                <div>
                                    <MobileStepper

                                        variant="progress"
                                        steps={3}
                                        position="static"
                                        activeStep={this.state.activeStep}
                                        className={classes.root}
                                        // cart={ <ShoppingCartIcon />}
                                        // nextButton={
                                        //     <div onClick={this.handleNext}>
                                        //         Next
                              
                                        //     </div>
                                        // }
                                        // step={this.state.column}

                                    />

                                </div>
                                <div style={{marginTop:"-35px", marginLeft:"5px"}}>
                                    <ShoppingCartIcon />
                                </div>
                            </div>
                        </div>
                        <div >
                            <div style={{ fontWeight: "bold", margin: "15px 15px 15px 15px" }} className="Review_your_Order">Review your Order</div>
                            <Divider />
                            <div className="shop_Div">
                                <div>
                                    <Card style={{ width: "80px", height: "75px", padding: "10px", background: "grey", borderRadius: "10px" }}>
                                        $ 99 per month advance</Card>
                                </div>
                                <div className="advance" >
                                    advance pack details
                            </div>


                                <div className="Detalis">
                                    <div style={{ fontFamily: "timesNewRoman", color: "black", fontSize: "18px", marginLeft: "40px" }}>
                                        Price
                            </div>
                                    <div style={{ fontFamily: "timesNewRoman", color: "black", fontSize: "18px", marginLeft: "40px" }}>
                                        validity
                            </div>
                                </div>


                                <div className="_place_">
                                    <div className="shop_Button">
                                        <div className="place_">Subtotal(1 item) : $99</div>
                                        <div className="place_">
                                            <div className="place_order"  onClick={this.handleNext}>Proceed to Checkout</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className="sub_Total_">Subtotal(1 item) : $99</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
shoppingCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(shoppingCard);

              // export default withRouter(shoppingCard)
