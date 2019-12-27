import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Paper, Popper, ClickAwayListener, MenuItem } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVertOutlined';
import TrashComponent from '../component/TrashComponent';
import LabelComponent from '../component/LabelComponent'

class moreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
            trashNotesId: "",
            quesNotesId:"",
            notesId :this.props.notesId
        }
    }
    handleMore = (e) => {
        console.log("notes id is ", this.props.notesId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId: this.props.notesId,
           
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleLabelProps = (isTrue) => {
        this.props.createlabelPropsToMore(isTrue)
    }

    handleEditor=()=>{
        this.props.propsToEditor()
        
    }
    render() {
        console.log("qqqqqqqqqqqqqqqqq==========>", this.state.notesId);
        
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <MoreVertIcon
                        onClick={(e) => this.handleMore(e)}
                    />
                </ClickAwayListener>
                
                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }}>
                    <Paper className="moreOption">
                        <MenuItem><TrashComponent noteIdToTrash={this.state.trashNotesId} /></MenuItem>
                        <MenuItem><LabelComponent notesIdToLabel={this.props.notesId} createlabelPropsToMore={this.handleLabelProps} /></MenuItem>
                        <MenuItem onClick={this.handleEditor}  askId={this.state.notesId}> Ask a question</MenuItem>


                    </Paper>
                </Popper>
            </div>


        )
    }
}

export default withRouter(moreComponent)
