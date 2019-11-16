import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Paper, Popper, ClickAwayListener, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
import TrashComponent from '../component/TrashComponent';
class moreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl:null,
            trashNotesId:""
        }
    }
    handleMore =(e) => {
        console.log("notes id is ",this.props.notesId);
        
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId:this.props.notesId
            });
        }
    
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <MoreVertIcon
                        onClick={(e)=>this.handleMore(e)}
                    />
                </ClickAwayListener>
                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{zIndex:"9999"}}>
                    <Paper>
                   <MenuItem><TrashComponent noteIdToTrash={this.state.trashNotesId}/></MenuItem>
                   
                       
                </Paper>
                </Popper>
            </div>


        )
    }
}

export default withRouter(moreComponent)
