import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, ClickAwayListener, MenuItem, Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Logout } from '../services/userProfile';
export class ProfileImgComponenet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,

        }
    }
    handleUploadImg=()=>{
        var data={
            
        }
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleMore = (e) => {
        console.log("notes id is ", this.props.notesId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId: this.props.notesId
        });
    }
    handleLogout=()=>{
      localStorage.clear()
      this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <AccountCircleIcon onClick={(e) => this.handleMore(e)} />
                </ClickAwayListener>

                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }}>
                    <Paper className="">
                    kfjdkfjskdfdfdjsfkdfdjfdj
                        <Button onClick={this.handleLogout}>Sign out</Button>
                    </Paper>
                </Popper>
            </div>



        )
    }
}

export default withRouter(ProfileImgComponenet)
