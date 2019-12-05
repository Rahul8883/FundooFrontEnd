/******************************************************************************************
 * @purpose : User Interface -Responsive design to support multiple resolution for ServiceCard page
 * @file : ServiceCard.jsx
 * @module : serviceCard Card
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import React, { Component } from "react";
import { userServic, addToCart } from '../services/shoppingServices';
import { withRouter } from 'react-router-dom';
import { Card } from "@material-ui/core";

class ServiceCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseState: false,
            serviceArr: [],
            cartHoverId: '',
            cartId: ""
        }
    }
    componentDidMount() {
        userServic().then(res => {
            this.setState({
                serviceArr: res.data.data.data
            })
            console.log("response in get user shoping services", this.state.serviceArr);
        }).catch(err => {
            console.log("err in get user shoping services", err);
        })
        console.log("window.location.href", window.location.pathname);
    }
    handleLogin = () => {
        this.props.history.push('/login')
    }
    handleRegister = (productId) => {
        var data = {
            productId: productId
        }
        console.log("data before add to cart", data);

        addToCart(data)
            .then(async response => {
                console.log("RES_FROM_ADD_TO_CART", response);
                var data = {
                    cartId: response.data.data.details.id,
                    productId: response.data.data.details.productId,
                    serviceName: response.data.data.details.product.name
                }
                console.log("data before sending to reg", data);
                this.props.history.push('/register', data)
            })
            .catch(err => {
                console.log("ERR_AFTER_HITTING_ADD_TO_CART", err);
            })
    }
    handleMouseEnter = (id) => {
        console.log("log id in mouse enter", id);

        this.setState({
            mouseState: true,
            cartHoverId: id
        })
    }
    handleMouseLeave = () => {
        this.setState({
            mouseState: false
        })
    }
    render() {
        console.log("props", this.props);
        const mouseColor = this.state.mouseState ? "orange" : "gray"
        const serviceMap = this.state.serviceArr.map(key => {
            return (

                <Card className="outercard"
                    style={{
                        background:
                            (key.id === this.props.propsProductId) ? this.props.propsColor : "gray" && (key.id === this.state.cartHoverId ? mouseColor : "gray"),
                        transform: (mouseColor === "orange") && (key.id === this.state.cartHoverId) ? "scale(1.1)" : (null),
                        position: "relative",
                        overflow: "visible"
                    }}>
                    <Card className="Innercard" onMouseEnter={this.props.cartProps ? null : () =>

                        this.handleMouseEnter(key.id)} onClick={this.props.cartProps ? null : () =>

                            this.handleRegister(key.id)} onMouseLeave={this.props.idProps === key.id ? null : () =>

                                this.handleMouseLeave(key.id)}>
                        <div className="serviceCard-Contant" style={{ padding: "3vh 2vh" }}>
                            <div style={{ fontFamily: "TimesNewRoman", fontSize: "25px" }}> price: ${key.price}per month</div>
                            <div style={{ color: "#0000ff", fontSize: "25px", flexWrap: "wrap" }}>{key.name}</div>
                            <div style={{ fontFamily: "TimesNewRoman", fontSize: "20px" }}>
                                <li>${key.price}/month</li>
                                <li>{key.description}</li>
                            </div>
                        </div>

                    </Card>
                    <div className="serviceCard_selector"> {key.id === this.props.propsProductId ? this.props.status : "ADD TO CART"}</div>
                </Card>
            )
        })
        return (

            this.props.cartProps !== true ?
                <div className="serviceCard-container">
                    <div className="serviceCard_header">
                        <div className="serviceCard_HeaderTitle">
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>F</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>u</span>
                            <span style={{ color: 'black', fontFamily: 'TimesNewRoman', fontSize: 25 }}>n</span>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>d</span>
                            <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>n</span>
                            <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                            <span style={{ color: 'seagreen', fontFamily: 'TimesNewRoman', fontSize: 25 }}>t</span>
                            <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>e</span>
                            <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>s</span>
                        </div>
                    </div>
                    <div className="harHar">
                        <div className="serviceCard_Notes">
                            <div className="Card_Note" >FundooNotes offered. Choose below service to Register.</div>

                            <div className="service-cards">
                                {serviceMap}
                            </div>

                        </div>
                        <div>
                            <span className="serviceCard_LoginButton" onClick={this.handleLogin} >SignIn</span>
                        </div>
                    </div>
                </div>
                :
                <div className="service-cards">
                    {serviceMap}
                </div>
        )

    }
}

export default withRouter(ServiceCard)