import React, { Component } from 'react';

// import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import RefreshIcon from '@material-ui/icons/Refresh';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoreIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
export default class AppBarComponent extends Component {
    render() {
        return (
            <div>

                <AppBar position="static">
                    <Toolbar>
                        <div className="abcdfghsigklo">
                            <IconButton
                                edge="start"

                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography >
                                <div>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 30 }}>F</span>
                                    <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>u</span>
                                    <span style={{ color: 'orange', fontFamily: 'TimesNewRoman', fontSize: 25 }}>n</span>
                                    <span style={{ color: 'blue', fontFamily: 'TimesNewRoman', fontSize: 25 }}>d</span>
                                    <span style={{ color: 'green', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                                    <span style={{ color: 'red', fontFamily: 'TimesNewRoman', fontSize: 25 }}>o</span>
                                </div>
                            </Typography>
                        </div>
                        <div >
                            <div className="hjdsgfhjudsBGFYHDS">
                                
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    // classes={{
                                    //     root: classes.inputRoot,
                                    //     input: classes.inputInput,
                                    // }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            
                        </div>
                        <div />
                        <div >


                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <RefreshIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <DashboardIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                // aria-controls={menuId}
                                aria-haspopup="true"

                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>

                    </Toolbar>
                </AppBar>

            </div>
        )
    }
}


