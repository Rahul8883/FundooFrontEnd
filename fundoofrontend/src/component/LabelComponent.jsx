import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, ClickAwayListener, InputBase, Button, List, Checkbox } from '@material-ui/core';
import { createLabel, getLabel, noteLabels, getNote } from '../services/notesServices';
import SearchIcon from '@material-ui/icons/SearchOutlined';
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
            console.log("response coming from get all labels Api", this.state.allLabels);

        }).catch((err) => {
            console.log("Error occur while heatting get Label back-end Api", err);
        })
    }

    // searchlabel = (allLabels, filterItem) => {
    //     const listItem = allLabels.filterItem(label => {
    //         //Remove label from list that do not match current filterItem//
    //         return label.label.toLowwerCase().indexOf(filterItem.toLowwerCase()) >= 0
    //     }).map(label => {
    //         return (
    //             <li key={label.labelId}></li>
    //         )
    //     })
    //     return (
    //         <div>
    //             <ui>
    //                 {listItem}
    //             </ui>
    //         </div>
    //     )

    // }
    getNotes = () => {
        getNote().then((res) => {
            console.log("response coming from get notes", res);

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
        console.log("state of check notes ", this.props.notesIdToLabel)
        var data = {
            "labelId": labelId,
            "noteId": this.props.notesIdToLabel
        }
        console.log("data in create label component", data);
        noteLabels(data).then((res) => {
            console.log("response coming from note label back-end aApi", res);
            this.props.createlabelPropsToMore(true)
        }).catch((err) => {
            console.log("Error occur while heatting note Label back-end Api ", err);
        })
    }
    handleChangeCreateLabel = async (e) => {
        console.log("even data", e.target.value);
        await this.setState({
            labelData: e.target.value
        })
        console.log("writing data for create Label", this.state.labelData);
    //    const labelData = this.state.props
       
    //    }}
    }
    // handlecreateWriting = (labelData) => {
    //     this.labelData = this.props;
        
    //     const labelList = labelData.map(label => {
    //         return (
    //             <div>

    //             </div>
    //         )
    //     })
    // }


    render() {
        var allLabelData = this.state.allLabels.map((key) => {
            return (
                <div>
                    <List>
                        <Checkbox
                            value={key.label}
                            onClick={() => this.CheckedNotes(key.id)}>
                        </Checkbox>
                        {key.label}
                    </List>
                </div>
            )
        }
        )
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <div onClick={(e) => this.handleAddLabel(e)} className="MoreItem">Add Label</div>
                </ClickAwayListener>
                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }}>
                    <Paper>
                        <div>{"Label note ?"}</div>
                        <div>
                            <InputBase
                                placeholder="Enter Label name"
                                multiline
                                spellCheck={true}
                                value={this.state.labelData}
                                onChange={this.handleChangeCreateLabel}
                            />
                            <SearchIcon />
                        </div>
                        {allLabelData}
                        <div >
                            <Button onClick={this.handleCreateLabel}><span>+Create :"{this.state.labelData}"</span></Button>
                        </div>
                    </Paper>
                </Popper>
            </div>
        )
    }
}
export default withRouter(LabelComponent)