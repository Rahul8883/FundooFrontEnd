import React, { Component } from 'react'
import { createLabels, getLabels, createNoteLabels } from '../services/labelServices';
import { Input, Button, List, Checkbox, Tooltip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
// import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
const styles = theme => ({
    typography: {
        padding: theme.spacing.unit * 2,
    },
});
export default class LabelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            label: [],
            createdLabel: [],
            open: false,
            allLabels: [],
            labelId: "",
            checkList: "",
            isChecked: true
        }
    }
    componentDidMount() {
        //     this.getlabel()
        // }
        // getlabel = () => {
        //     getLabels()
        //         .then(response => {
        //             console.log("getlabels_in_drawer", response);
        //             this.setState({
        //                 allLabels: response.data.data.details
        //             })
        //             console.log("EXACT_RESPONSE_FROM_GET_ALL_LABELS", this.state.allLabels);
        //             console.log("RESPONSE_FROM_GET_ALL_LABEL", response);
        //         })
        //         .catch(err => {
        //             console.log("ERR_IN_GETTING_LABEL", err);
        //         })
        // }
        handleLabel = (e) => {
            this.setState({
                label: e.target.value
            })
        }
        handleSubmit = () => {
            var userId = localStorage.getItem('userId')
            var data = {
                'label': this.state.label,
                'isDeleted': false,
                'userId': userId
            }
            createLabels(data)
                .then(response => {
                    console.log("response of create note while hetting back-end Api", response);
                    this.setState({
                        createdLabel: response.data.id
                    })
                    console.log("created label", this.state.createdLabel);
                    this.DisplayLabelToNote(this.props.noteID, this.state.createdLabel)
                    this.getlabel()
                })
                .catch(err => {
                    console.log("Error occur while hetting back api of create label", err);
                })
        }
    }
    //  DisplayLabelToNote=(noteId, labelId)=>{
    //     var data = {
    //         'noteIdList': noteId,
    //         'label': labelId
    //     }
    //     console.log("labelId Cheking", this.state.labelId);
    //     console.log("checklist Cheking", this.state.checkList);
    //     console.log("props noteId Cheking", this.props.noteID);
    //      createNoteLabels(data, noteId, labelId)
    //         .then(response => {
    //             console.log("CREATE_NOTE_LABEL_BY_ID_RESPONSE", response);
    //             this.getlabel()
    //         })
    //         .catch(err => {
    //             console.log("ERROR_IN_CREATING_LABEL_", err);
    //         })
    // }
    //     handleToggle = () => {
    //         this.setState({
    //             open: !this.state.open,
    //             labelId: ""
    //         })
    //     }
    //     async CheckedNotes(e, labelId) {
    //         await this.setState({
    //             isChecked: e.target.checked,
    //             checkList: e.target.value,
    //             labelId: labelId
    //         })
    //         var data = {
    //             'noteIdList': this.props.noteID,
    //             'label': this.state.checkList
    //         }
    //         console.log("labelId Cheking", this.state.labelId);
    //         console.log("checklist Cheking", this.state.checkList);
    //         console.log("props noteId Cheking", this.props.noteID);
    //         await createNoteLabels(data, this.props.noteID, this.state.labelId)
    //             .then(response => {
    //                 console.log("CREATE_NOTE_LABEL_BY_ID_RESPONSE", response);
    //                 this.getlabel()
    //             })
    //             .catch(err => {
    //                 console.log("ERROR_IN_CREATING_LABEL_", err);
    //     }
    // }
    renderAllLabel = () => {
        return (<div>
            {this.state.allLabels.map((key) =>
                <List>
                    <Checkbox
                        value={key.label}
                        onClick={(e) => this.CheckedNotes(e, key.id)}>
                    </Checkbox>
                    {key.label}
                </List>
            )}
        </div>
        )
    }
    render() {
        // const { classes } = this.props;
        // const { anchorEl, open } = this.state;
        // const id = open ? 'simple-popper' : null;
        return (
            // <PopupState variant="popper" >
            //     {popupState => (
            //         <div>
            //             <div variant="contained" {...bindToggle(popupState)}>
            //                 <div >Create Label
            //     </div>
            //             </div>
            //             <Popper  {...bindPopper(popupState)} transition style={{ zIndex: "9999" }}>
            //                 <Paper >
            //                     <div className="labelDisp">
            //                         <Input
            //                             placeholder="add label here....."
            //                             value={this.state.label}
            //                             onChange={this.handleLabel}>
            //                         </Input>
            //                         <div className="labelPosition">
            //                             {this.renderAllLabel()}
            //                         </div>
            //                     </div>
            //                     <div>
            //                         <Button onClick={this.handleSubmit}>+ &nbsp; CREATE &nbsp; "{this.state.label}"</Button>
            //                     </div>
            //                 </Paper>
            //             </Popper>
            //         </div>
            //     )}
            // </PopupState>





            <div>
                <Tooltip>
                    <Button aria-describedby={id} variant="contained" onClick={this.handleClick}>
                        Toggle Popper
            </Button>
                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper>
                                   {/* <Typography className={classes.typography}> <div className="labelDisp">
                                        <Input
                                            placeholder="add label here....."
                                            value={this.state.label}
                                            onChange={this.handleLabel}>
                                        </Input>
                                        <div className="labelPosition">
                                            {this.renderAllLabel()}
                                        </div>
                                    </div>
                                        <div>
                                            <Button onClick={this.handleSubmit}>+ &nbsp; CREATE &nbsp; "{this.state.label}
                                            </Button>
                                        </div>
                        </Typography>*/}

                        
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </Tooltip>
            </div>
        )
    }
}

// SimplePopper.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default withStyles(styles)(SimplePopper);