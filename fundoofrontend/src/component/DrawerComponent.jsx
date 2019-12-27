import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withRouter } from 'react-router-dom';
import { MenuItem, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import EmojiObjectsOutlineIcon from '@material-ui/icons/EmojiObjectsOutlined';
import AddAlertOutlineIcon from '@material-ui/icons/AddAlertOutlined';
// import LabeloutlineIcon from '@material-ui/icons/LabelOutlined';
import ArchiveOutlineIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlineIcon from '@material-ui/icons/EditOutlined';
// import { getArchiveNotes } from '../services/notesServices';
// import getTrashComponent from './getTrashComponent'
var theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paper: {
                top: "65px",
                width: " 220px",
                height: "100vh"
            },
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
    handleArchive=()=>{
        console.log("triggered");
        this.props.history.push("/getArchive")
    }
    handleNotes=()=>{
        console.log("triggered");
        this.props.history.push("/dashboard")
    }
    handleTrash=()=>{
        console.log("triggered");
        this.props.history.push("/getTrash")
    }
    handlePushReminder=()=>{
        this.props.history.push("/getReminder")
    }
    render() {
        console.log("open ", this.state.open);
        return (
            <div>
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
                                    <ul type="none" style={{ borderBottom: "1px solid #ddd", margin: 0, padding: 0 }} >
                                        <li  className="DrawerIcons"> <MenuItem style={{ backgroundColor: "transparent" }} onClick={this.handleNotes}><EmojiObjectsOutlineIcon style={{ marginBottom: "7px" }} className="Icon" /><div className="iconName">Notes</div></MenuItem></li>
                                        <li className="DrawerIcons"><MenuItem style={{ backgroundColor: "transparent" }}  onClick={this.handlePushReminder} ><AddAlertOutlineIcon className="Icon" /><div className="iconName">Reminder</div></MenuItem></li>
                                    </ul>
                                    <ul type="none" style={{ borderBottom: "1px solid #ddd", margin: 0, padding: 0 }}>
                                        <div className="Label">LABELS</div>
                                        <li className="DrawerIcons"> <MenuItem style={{ backgroundColor: "transparent" }}><EditOutlineIcon className="Icon" /><div className="iconName">Edit Label</div></MenuItem></li>
                                    </ul>
                                    <ul type="none" style={{ margin: 0, padding: 0 }}>
                                        <li className="DrawerIcons"> <MenuItem style={{ backgroundColor: "transparent" }} onClick={this.handleArchive}><ArchiveOutlineIcon className="Icon"  /><div className="iconName">Archive</div></MenuItem></li>
                                        <li className="DrawerIcons"><MenuItem style={{ backgroundColor: "transparent" }} onClick={this.handleTrash}  ><DeleteOutlineIcon className="Icon" /><div className="iconName">Trash</div></MenuItem></li>
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

export default withRouter(DrawerComponent)

