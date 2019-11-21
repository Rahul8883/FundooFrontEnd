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

                            <div className="mainDrawerIcon">
                                <div >
                                    <ul type="none" style={{ borderBottom: "1px solid #ddd" }} >
                                        <li className="DrawerIcons"> <MenuItem><EmojiObjectsOutlineIcon style={{marginBottom:"7px"}} className="Icon"/></MenuItem><div className="iconName">Notes</div></li>
                                        <li className="DrawerIcons"><MenuItem><AddAlertOutlineIcon className="Icon"/></MenuItem><div className="iconName">Reminder</div></li>
                                    </ul>
                                    <ul type="none" style={{ borderBottom: "1px solid #ddd" }}>
                                        <div className="Label">LABELS</div>
                                        <li className="DrawerIcons"> <MenuItem><EditOutlineIcon className="Icon"/></MenuItem><div className="iconName">Edit Label</div></li>
                                    </ul>
                                    <ul type="none">
                                        <li className="DrawerIcons"> <MenuItem><ArchiveOutlineIcon className="Icon"/></MenuItem><div className="iconName">Archive</div></li>
                                        <li className="DrawerIcons"><MenuItem><DeleteOutlineIcon className="Icon"/></MenuItem><div className="iconName">Trash</div></li>
                                    </ul>
                                </div>
                            </div>








                        </Drawer>

                    </div>
                </MuiThemeProvider>
            </div >
        )
    }
}

export default DrawerComponent

