import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import DrawerComponent from '../component/DrawerComponent';
export default class AppBarComponent extends Component {
    
    constructor(){
        super();
        this.state={
            menu:false
        }
    }
    handleMenu = async () => {
        await this.setState({
        menu: !this.state.menu
        })
        // await this.props.transition(this.state.menu);
        console.log("state ",this.state.menu);
        }
    render() {
        return (
            <div>
              
                <AppBar  style={{maxWidth:"100%"}} position="fixed">
                    <Toolbar style={{ backgroundColor: "white",width: "100%" }}>
                        <div className="appbar_div_1">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleMenu}
                            >

                                <MenuIcon />
                            </IconButton>
                            <DrawerComponent menuSelect={this.state.menu}/>
                            <div className="imageTag">
                                <img style={{ width: "60px", height: "63px", display: "flex" }} src={require('../assets/image/keep-512.png')} alt="img"/>
                            </div>
                            <Typography >
                                <div>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>F</span>
                                    <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>u</span>
                                    <span style={{ color: 'orange', fontFamily: 'TimesNewRoman', fontSize: 25 }}>n</span>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>d</span>
                                    <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                                    <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>n</span>
                                    <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                                    <span style={{ color: 'orange', fontFamily: 'TimesNewRoman', fontSize: 25 }}>t</span>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>e</span>
                                    <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>s</span>
                                </div>
                            </Typography>
                        </div>
                        <div className="IconWithSearch">
                        <div className="searchEngine">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <div className="inputSearchField">
                                <InputBase
                                     style={{width:"850px"}}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </div>
                        </div>
                        <div />
                        <div className="applogo">
                          <div className="Cart_referece_dashboard_logo">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <RefreshIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <DashboardIcon />
                            </IconButton>
                            </div>
                          <div className="AccountCircle">
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            </div>
                        </div>
                    </Toolbar>

                </AppBar>
              
            </div>
        )
    }
}


