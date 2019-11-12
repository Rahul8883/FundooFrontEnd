import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
// import { withRouter } from 'react-router-dom';
import { MenuItem, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import EmojiObjectsOutlineIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlineIcon from '@material-ui/icons/AddAlertOutlined';
// import LabeloutlineIcon from '@material-ui/icons/LabelOutlined';
import ArchiveOutlineIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlineIcon from '@material-ui/icons/EditOutlined';
var theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                width: "174px",
                top: "65px",
                width: " 212px",
                height: "100vh"
            }
        }
    }
})

export class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            labelArr: []
        }
    }
    handledrawer = () => {
        this.setState({
            open: true
        })
    }
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    }
    handleDraweropen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        console.log("open ", this.state.open);
        return (
            <div>
                {/* <Button onClick={this.handleDraweropen}>Menu</Button> */}
                <MuiThemeProvider theme={theme}>
                    <div>
                        <Drawer
                            variant="persistent"
                            anchor="left"
                            open={this.props.menuSelect}
                            onClose={this.handleDrawerClose}
                            drawerWidth={10}
                        >
                            <div>
                                <MenuItem id="noteMenu">
                                    <EmojiObjectsOutlineIcon
                                    />
                                    <div
                                    //      style={{color:"inherit",
                                    //     letterspacing: ".01785714em",
                                    //     fontfamily: "Google Sans,Roboto,Arial,sansserif",
                                    //     fontsize: ".875rem",
                                    //     fontweight: "500",

                                    // }}

                                    >Notes</div>
                                </MenuItem>
                            </div>
                            <div>
                                <MenuItem id="noteMenu">
                                    <AddAlertOutlineIcon />
                                    <b>Remender</b>
                                </MenuItem>
                            </div>
                            <div style={{ borderBottom: "1px solid lightgrey", borderTop: "1px solid lightgrey" }}>
                                <div style={{  fontSize: "13px", marginBottom: "10px", marginTop: "10px", fontFamily: "arial" }}>
                                    <b>LABELS</b>
                                    {/* <div style={{ overflowY: "auto", maxHeight: "500px", borderRadius: "0px 25px 25px 0px" }}>
                                        labelArr
                                    </div> */}
                                    {/* <Editlabel></Editlabel> */}
                                    <div>
                                        <MenuItem id="noteMenu">
                                            <EditOutlineIcon/>
                                            <b>Edit Labels</b>
                                        </MenuItem>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <MenuItem id="noteMenu">

                                    <ArchiveOutlineIcon />
                                    <b>Archive</b>
                                </MenuItem>
                            </div>
                            <div>
                                <MenuItem id="noteMenu">
                                    <DeleteOutlineIcon />
                                    <b>Trash</b>
                                </MenuItem>
                            </div>
                        </Drawer>

                    </div>
                </MuiThemeProvider>
            </div >
        )
    }
}

export default DrawerComponent

