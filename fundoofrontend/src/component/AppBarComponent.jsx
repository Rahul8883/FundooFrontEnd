import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import DrawerComponent from '../component/DrawerComponent';
import ProfileImgComponenet from '../component/ProfileImgComponenet';
import ViewStreamSharpIcon from '@material-ui/icons/ViewStreamSharp';

export default class AppBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            icon: false
        }
    }

    handleMenu = async () => {
        await this.setState({
            menu: !this.state.menu
        })
        this.props.transition(this.state.menu);
        console.log("state ", this.state.menu);
    }

    searchHandle = (event) => {
        this.setState({
            searchNote: event.target.value
        })
        this.props.Searchbar(this.state.searchNote);
    }

    handleIcons_Grid = () => {
        this.setState({
            icon: !this.state.icon
        })
        this.props.iconSelect(this.state.icon);
    }

    render() {
        return (
            <div>
                <AppBar style={{ maxWidth: "100%" }} position="fixed">
                    <Toolbar style={{ backgroundColor: "white", width: "100%" }}>
                        <div className="appbar_div_1">
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.handleMenu}>
                                <MenuIcon />
                            </IconButton>
                            <DrawerComponent menuSelect={this.state.menu} />
                            <div className="imageTag">
                                <img style={{ width: "60px", height: "63px", display: "flex" }} src={require('../assets/image/keep-512.png')} alt="img" />
                            </div>
                            <Typography >
                                <div>
                                    <span className="F">F</span>
                                    <span className="u">u</span>
                                    <span className="n">n</span>
                                    <span className="d">d</span>
                                    <span className="o" >o</span>
                                    <span className="oo" >o</span>
                                    <span className="N" >n</span>
                                    <span className="o">o</span>
                                    <span className="t">t</span>
                                    <span className="e" >e</span>
                                    <span className="s">s</span>
                                </div>
                            </Typography>
                        </div>
                        <div className="IconWithSearch">
                            <div className="searchEngine">
                                <div className="searchIcon">
                                    <img src={require('../assets/image/searchIcon.svg')}
                                        alt="search icon" style={{ width: "23px" }} />
                                </div>
                                <div className="inputSearchField">
                                    <InputBase
                                        fullWidth
                                        className="SearchFieldBase"
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                        value={this.state.searchNotes}
                                        onChange={this.searchHandle} />
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
                                    color="inherit" >
                                    <RefreshIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit">
                                    <ShoppingCartIcon />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit">
                                    {this.state.icon ?
                                        <DashboardIcon
                                            onClick={this.handleIcons_Grid} /> 
                                            : <ViewStreamSharpIcon onClick={this.handleIcons_Grid} />
                                    }
                                </IconButton>
                            </div>
                            <div className="AccountCircle">
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-haspopup="true"
                                    color="inherit">
                                    <ProfileImgComponenet />
                                </IconButton>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}