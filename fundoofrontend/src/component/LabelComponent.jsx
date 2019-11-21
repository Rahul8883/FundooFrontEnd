import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, ClickAwayListener, InputBase, Button, List, Checkbox } from '@material-ui/core';
import { createLabel, getLabel } from '../services/notesServices';
class LabelComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            label: [],
            check: false,
            isDeleted: false,
            labelText: '',
            labelData: '',
            open: false,
            allLabels: []
        }
    }
    componentDidMount() {
        this.getLabel()
    }
    handleCreateLabel = () => {
        var userId = localStorage.getItem('userId')
        var data = {
            isDeleted: false,
            label: this.state.labelData,
            userId: localStorage.getItem("userId")
        }
        createLabel(data).then((res) => {
            console.log("response whilw hetting back-end create label Api", res);
            this.setState({
                createdLabel: res.data.label
            })
            console.log("final result while heatting create label back-end", this.state.createdLabel);
        }).catch((err) => {
            console.log("Error occur While hratting Create Label back-end Api", err);

        })
    }
    getLabel = () => {
        getLabel().then(async (res) => {
            console.log("RES_AFTER_GET_LABEL", res);

            await this.setState({
                allLabels: res.data.data.details
            })
            console.log("response coming from get label Api", this.state.allLabels);

        }).catch((err) => {
            console.log("Error occur while heatting get Label back-end Api", err);
        })
    }
    handleAddLabel = (e) => {
        console.log("notes id is ", this.props.notesId);
        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
        });
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    CheckedNotes = (labelId) => {
        this.setState({
            check: !this.state.check,
            anchorEl: false
        })
    }
    handleChangeCreateLabel = async (e) => {
        console.log("even data", e.target.value);
        await this.setState({
            labelData: e.target.value
        })
        console.log("satae data after setstate", this.state.labelData);
    }
    // renderAllLabel = () => {
    //     return (
    //         <div>
    //             {this.state.allLabels.map((key) =>
    //                 <List>
    //                     <Checkbox
    //                         value={key.label}
    //                         onClick={(e) => this.CheckedNotes(e, key.id)}>
    //                     </Checkbox>
    //                     {key.label}
    //                 </List>
    //             )}
    //         </div>
    //     )
    // }
    render() {
       
       var allLabelData= this.state.allLabels.map((key) =>{
            return(
                <div>
            <List>
                <Checkbox
                    value={key.label}
                    onClick={(e) => this.CheckedNotes(e, key.id)}>
                </Checkbox>
                {key.label}
            </List>
            </div>
        )}
        )
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <div onClick={(e) => this.handleAddLabel(e)}>Add Label</div>
                </ClickAwayListener>
                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }}>
                    <Paper>
                        <div>{"Label note ?"}</div>
                        <InputBase
                            placeholder="Enter Label name"
                            multiline
                            spellCheck={true}
                            value={this.state.labelData}
                            onChange={this.handleChangeCreateLabel}
                        />
                        {allLabelData}
                        <div style={{ borderBottom: "1px solid #ddd" }}>
                            <Button onClick={this.handleCreateLabel}>Create</Button>
                        </div>
                    </Paper>
                </Popper>
            </div>
        )
    }
}
export default withRouter(LabelComponent)