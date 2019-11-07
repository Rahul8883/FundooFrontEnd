import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { MenuItem, Button } from '@material-ui/core';
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    }
})
export class DrawerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
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
    handleButton = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleClose=()=>{
        this.setState({
            open:false
        })
    }
    render() {
        console.log("open ",this.state.open);
        
        return (
            <div>
                <Button onClick={this.handleButton}>Menu</Button>
                <div>
                    <Drawer
                    anchor="left" 
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                       <MenuItem>
                       Notes
                       </MenuItem> 
                    </Drawer>
                </div>

            </div>
        )
    }
}

export default DrawerComponent
