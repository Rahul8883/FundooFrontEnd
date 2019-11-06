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
    handleMouseEnter = async (id) => {
        console.log("log id in mouse enter", id);

        await this.setState({
            mouseState: true,
            cartHoverId: id
        })
    }
    handleMouseLeave() {
        this.setState({
            mouseState: false
        })
    }
    render() {


        const mouseColor = this.state.mouseState ? "orange" : "gray"
        const serviceMap = this.state.serviceArr.map(key => {
            return (

                <Card className="outercard" style={{ background: (key.id === this.props.propsProductId) ? this.props.propsColor : "gray" && (key.id === this.state.cartHoverId ? mouseColor : "gray") }}
                >
                    <Card onMouseEnter={this.props.cartProps ? null : () => this.handleMouseEnter(key.id)} className="Innercard" onClick={(this.props.cartProps) ? null : () => this.handleRegister(key.id)} onMouseLeave={this.props.idProps === key.id ? null : () => this.handleMouseLeave(key.id)}
                    >
                        <div style={{ fontFamily: "TimesNewRoman", fontSize: "25px" }}> price: ${key.price}per month</div>
                        <div style={{ color: "#0000ff", fontSize: "20px", flexWrap: "wrap" }}>{key.name}</div>
                        <div style={{ fontFamily: "TimesNewRoman", fontSize: "15px" }}>
                            <li>${key.price}/month</li>
                            <li>{key.description}</li>
                        </div>
                    </Card>
                    <div className="obey"> {key.id === this.props.propsProductId ? this.props.status : "addToCart"}</div>
                </Card>
            )
        })
        return (
            this.props.cartProps !== true ?
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
                        {serviceMap}
                    </div>
                    <span onClick={this.handleLogin} className="base-line">  LogIn Instead</span>
                </div>
                :
                <div className="service-cards">
                    {serviceMap}
                </div>
        )

    }
}

export default withRouter(ServiceCard)