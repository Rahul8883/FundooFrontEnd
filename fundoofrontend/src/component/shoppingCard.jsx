// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import { withRouter } from 'react-router-dom';
// import { Divider, Card } from '@material-ui/core';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import AppBarComponent from '../component/AppBarComponent'
// import {getCartDetails} from '../services/userServices'
// const styles = {
//     root: {
//         maxWidth: 400,
//         flexGrow: 1,
//     },
// };
// export class shoppingCard extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             cartIdFromLogin : this.props.location.state,
//             allproductDetails:[],
//             activeStep: 0,
//             column: [
//                 { title: 'signIn', field: 'signIn' },
//                 { title: "review", field: "review" },
//                 { title: "compleate", field: "compleate" },
//             ]

//         }
//     }
//     componentDidMount(){
//         this.handleGetCartDetails();
//     }
// handleGetCartDetails=()=>{
//   console.log(this.state.cartIdFromLogin);
//     getCartDetails(this.state.cartIdFromLogin).then(res=>{
//         console.log("success response getting get cart details form back-end", res.data.data);
//         this.setState({
//             allproductDetails : res.data.data
//         })
//     }).catch(err=>{
//         console.log("error response getting get cart details form back-end", err);
        
//     })
// }
//     handleNext = () => {
//         this.setState(state => ({
//             activeStep: state.activeStep + 1,
//         }));
//     };

//     // handleBack = () => {
//     //     this.setState(state => ({
//     //         activeStep: state.activeStep - 1,
//     //     }));
//     // };
//     render() {
//         const { classes, theme } = this.props;
//         // return ( 
//          //   <div>
               
//                 {this.state.allproductDetails.map(key=>{
//                     return (
                      
//                         <div className="Main_div_Shop">
//                         <div className="sub_div_shop">
//                             <div className="stepper_Main">
//                                 <div className="fundoo_">fundooNotes</div>
//                                 <div className="stepper_Icon" style={{marginTop:"5%"}}>
    
//                                     <div>
//                                         <MobileStepper
    
//                                             variant="progress"
//                                             steps={3}
//                                             position="static"
//                                             activeStep={this.state.activeStep}
//                                             className={classes.root}
//                                             // cart={ <ShoppingCartIcon />}
//                                             // nextButton={
//                                             //     <div onClick={this.handleNext}>
//                                             //         Next
                                  
//                                             //     </div>
//                                             // }
//                                             // step={this.state.column}
    
//                                         />
    
//                                     </div>
//                                     <div style={{marginTop:"-35px", marginLeft:"5px"}}>
//                                         <ShoppingCartIcon />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                            {/* {this.state.allproductDetails.map(key=>{})}  */}
//                                 <div style={{ fontWeight: "bold", margin: "15px 15px 15px 15px" }} className="Review_your_Order">Review your Order</div>
//                                 <Divider />
//                                 <div className="shop_Div">
//                                     <div>
//                                         <Card style={{ width: "80px", height: "75px", padding: "10px", background: "grey", borderRadius: "10px" }}>
//                                             $ {key.price} per month advance</Card>
//                                     </div>
//                                     <div className="advance" >
//                                         {key.name} pack details
//                                 </div>
    
    
//                                     <div className="Detalis">
//                                         <div style={{ fontFamily: "timesNewRoman", color: "black", fontSize: "18px", marginLeft: "40px" }}>
//                                             Price
//                                 </div>
//                                         <div style={{ fontFamily: "timesNewRoman", color: "black", fontSize: "18px", marginLeft: "40px" }}>
//                                             validity
//                                 </div>
//                                     </div>
    
    
//                                     <div className="_place_">
//                                         <div className="shop_Button">
//                                             <div className="place_">Subtotal(1 item) : $99</div>
//                                             <div className="place_">
//                                                 <div className="place_order"  onClick={this.handleNext}>Proceed to Checkout</div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <Divider />
//                                 <div className="sub_Total_">Subtotal(1 item) : $99</div>
                            
//                             </div>
//                         </div>
//                     </div>

//                     )
//                 })}
               
//             {/*</div>
//         )*/}
//     }
// }
// shoppingCard.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(shoppingCard);

//               // export default withRouter(shoppingCard)






import React, { Component } from 'react'
import { userCartDetails, placeOrder } from '../services/userServices';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import AppBarComponent from '../component/AppBarComponent'

const styles = {
    root: {
        flexGrow: 1,
    },
};
const thm = createMuiTheme({
    overrides: {
        MuiLinearProgress: {
            bar: {
                "width": "300px",
                position: "relative",
            },
            barColorPrimary: {
                backgroundColor: "#3f51b5"
            }
        },
        MuiMobileStepper: {
            progress: {
                width: "43%"
            }
        }
    }
})
class shoppingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: {},
            activeStep: 0,
            address:"",
            key:""
        
        }
    }
    componentWillMount() {
 
        userCartDetails()
            .then(response => {
                console.log("RES_FROM_USER_CART_LIST", response.data.data[response.data.data.length-1].product);
                var listArray = response.data.data[response.data.data.length-1].product
                console.log("list array", listArray);
                
                this.setState({
                    
                    list: listArray,
                    key:response.data.data[response.data.data.length-1]
                })
                console.log("State",this.state.list);
            })
            .catch(err => {
                console.log("ERR_IN_GETTING_CART_LIST", err);
            })
    }
    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };
    handleAddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }
    handleNextToPay=(cartId)=>{
       
        var data={
            'cartId':cartId,
            'address':this.state.address
        }
        placeOrder(data)
        .then(response=>{
            console.log("RES_AFETR_PLACING_AN_ORDER",response);
            this.setState(state => ({
                activeStep: state.activeStep + 1,
            }));
        })
        .catch(err=>{
            console.log("ERR_IN_PLACING_AN_ORDER",err);
            
        })
    }
    render() {
        console.log("render state", this.state.list);
        
        const { classes, theme } = this.props;
        const {list}=this.state
        const {key}=this.state
        // const UserShoppingArr = this.state.list.map((key) => {
            console.log("keyyy cheking ========>>",key.id);
            return (<div>
               <AppBarComponent/>
                {(this.state.activeStep=== 0)&&
                <div className="main_div_shopping">
                    <div className="titleInShopping">
                        <div className="shoop_title">FundooNotes</div>
                        <div className="stepper">
                            <MuiThemeProvider theme={thm}>
                                <MobileStepper
                                    variant="progress"
                                    steps={3}
                                    // [{title:'signin'},{title:'review'},{title:'complete'}]
                                    position="static"
                                    className={classes.root}
                                    activeStep={this.state.activeStep}
                                    // image={<ShoppingCartIcon/>}
                                >
                                </MobileStepper>
                                <div style={{marginTop:"-47px", marginLeft:"5px"}}><ShoppingCartIcon/></div>
                                {/* <div>signIn         review        complete</div> */}
                            </MuiThemeProvider>
                        </div>
                    </div>
                    <div className="shopping_cart">
                        Shopping Cart
            </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                    <div className="Details_adjust_shopping">
                        <div className="shopping_details">
                            ${list.price}
                             per month 
                             <div>{list.name}</div>
                        </div>
                        <div className="shopping_data">
                            <div style={{ color: "#40a1e2", paddingRight: "323px" }}>
                                {list.name} pack Details
                            </div>
                            <li>
                                {list.description}
                            </li>
                        </div>
                        <div className="shopping_data" >
                            <div className="p">Price</div>
                            <div style={{ color: "#40a1e2" }}>
                                $ {list.price}
                                </div>
                        </div>
                        <div className="shopping_data">
                            <div className="p">Validity</div>
                            <div style={{ color: "#40a1e2" }}>Per Month</div>
                        </div>
                        <div className="shooping_proceede">
                            <div className="Checkout_total">
                                Subtotal (1 Item) : ${list.price}
                            </div>
                           
                                <div className="Checkout" size="small" onClick={this.handleNext} disabled={this.state.activeStep === 2}>
                                    Proceed to Checkout
                                </div>
                          
                        </div>
                    </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                    <div className="final_subtotal">
                        Subtotal (1 Item) : ${list.price}
                    </div>
                </div>}
                {(this.state.activeStep=== 1)&&
                <div className="main_div_shopping">
                    <div className="titleInShopping">
                        <div className="shoop_title">FundooNotes</div>
                        <div className="stepper"> 
                            <MuiThemeProvider theme={theme}>
                                <MobileStepper
                                    variant="progress"
                                    steps={3}
                                    // [{title:'signin'},{title:'review'},{title:'complete'}]
                                    position="static"
                                    className={classes.root}
                                    activeStep={this.state.activeStep}
                                    // image={<ShoppingCartIcon/>}
                                >
                                </MobileStepper>
                                <div style={{marginTop:"-47px", marginLeft:"190px"}}><ShoppingCartIcon/></div>
                            </MuiThemeProvider>
                            {/* <div>signIn    review   complete</div> */}
                        </div>
                    </div>
                    <div className="shopping_cart">
                        Shopping Cart
            </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                    <div className="Details_adjust_shopping">
                        <div className="shopping_details">
                            ${list.price} per month {list.name}
                        </div>
                        <div className="shopping_data">
                            <div style={{ color: "#40a1e2", paddingRight: "323px" }}>
                                Advance pack Details
                            </div>
                            <li>
                                {list.description}
                            </li>
                        </div>
                        <div className="shopping_data" >
                            <div>Price</div>
                            <div style={{ color: "#40a1e2" }}>
                                $ {list.price}
                                </div>
                        </div>
                        <div className="shopping_data">
                            <div>Validity</div>
                            <div style={{ color: "#40a1e2" }}>Per Month</div>
                        </div>
                        <div className="shooping_proceede">
                             <div className="checkoutt">
                                <Button size="small" onClick={()=>this.handleNextToPay(key.id)} disabled={this.state.activeStep === 2}>
                                    Place Your Order
                                </Button>
                            </div>
                            <div>
                                Subtotal (1 Item) : ${list.price}
                            </div>
                           
                        </div>
                    </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                    <div className="shopping_delivery">
                        <div>
                        <textarea  className="text_message"
                        value={this.state.address}
                        onChange={this.handleAddress}
                        >
                        </textarea>
                        </div>
                        <div className="payment_status" >
                            <div style={{fontSize:"18px",textAlign:"left"}}>payment method</div>
                            <div style={{ color: "#40a1e2",fontSize:"24px",textAlign:"left" }}>Cash on Delivery</div>
                        </div>
                    </div>
                </div>}
                {(this.state.activeStep=== 2)&&
                <div className="main_div_shopping">
                    <div className="titleInShopping">
                        <div className="shoop_title">Fundoo Notes</div>
                        <div className="stepper">
                            <MuiThemeProvider theme={theme}>
                                <MobileStepper
                                    variant="progress"
                                    steps={3}
                                    // [{title:'signin'},{title:'review'},{title:'complete'}]
                                    position="static"
                                    className={classes.root}
                                    activeStep={this.state.activeStep}
                                    // image={<ShoppingCartIcon/>}
                                >
                                </MobileStepper>
                                <div style={{marginTop:"-47px", marginLeft:"390px"}}><ShoppingCartIcon/></div>
                            </MuiThemeProvider>
                            {/* <div>signIn    review   complete</div> */}
                        </div>
                    </div>
                    <div className="shopping_cart">
                       Order List
            </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                    <div className="Details_adjust_shopping">
                        <div className="shopping_details">
                            ${list.price} per month {list.name}
                        </div>
                        <div className="shopping_data">
                            <div style={{ color: "#40a1e2", paddingRight: "323px" }}>
                                Advance pack Details
                            </div>
                            <li>
                                {list.description}
                            </li>
                        </div>
                        <div className="shopping_data" >
                            <div>Price</div>
                            <div style={{ color: "#40a1e2" }}>
                                $ {list.price}
                                </div>
                        </div>
                        <div className="shopping_data">
                            <div>Validity</div>
                            <div style={{ color: "#40a1e2" }}>Per Month</div>
                        </div>
                    </div>
                    <Divider style={{ marginTop: "20px", marginBottom: "20px" }}></Divider>
                </div>}
            </div>
            )
        // })
        // return (
        //     <div>
        //         {UserShoppingArr}
        //     </div>
        // )
    }
}
shoppingCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(shoppingCard);
