import React, { Component } from 'react'
import { Tooltip } from '@material-ui/core';
import { Paper, Popper, ClickAwayListener, MenuItem } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { UpdateReminder } from '../services/notesServices';
class TrashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: "",
            noteIdList: "",
            open: false,
            ReminderNotesId: ""
        }
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleReminder = (e) => {
        console.log("notes id is ", this.props.reminderNoteId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId: this.props.notesId
        });
    }
    setLaterToday = () => {
        try {
            var date = new Date();
            let reminder = date.setHours(20, 0, 0);
            let data = {
                noteIdList: [this.props.reminderNoteId],
                reminder: reminder
            }
     
            
            console.log("Reminder_data ", this.state.noteIdList);
            UpdateReminder(data).then((res) => {
                console.log("Res_occur_while_Heatting_Back-end", res);
            }).catch((err) => {
                console.log("Error Occur while hetting back-end reminder api", err);
            })
        } catch (err) {
            console.log("Error occur in set later todat reminder", err);
        }
    }
    settomorrow = () => {
        try {
            var day = new Date();
            var nextDay = new Date(day);
            nextDay.setDate(day.getDate() + 1);
            let reminder = nextDay.setHours(8, 0, 0);
            let data = {
                noteIdList: [this.props.reminderNoteId],
                reminder: reminder
            }
            console.log("Reminder_data ", this.state.noteIdList);

            UpdateReminder(data).then((res) => {
                console.log("Res_occur_while_Heatting_Back-end", res);
            }).catch((err) => {
                console.log("Error Occur while hetting back-end reminder api", err);
            })
        } catch (err) {
            console.log("Error occur in set later todat reminder", err);
        }
    }
    setnextWeek = () => {
        try {
            let d = new Date();
            d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
            let reminder = d.setHours(8, 0, 0);
            let data = {
                noteIdList: [this.props.reminderNoteId],
                reminder: reminder
            }
            console.log("Reminder_data ", this.state.noteIdList);

            UpdateReminder(data).then((res) => {
                console.log("Res_occur_while_Heatting_Back-end", res);
            }).catch((err) => {
                console.log("Error Occur while hetting back-end reminder api", err);
            })
        } catch (err) {
            console.log("Error occur in set later todat reminder", err);
        }
    }
    render() {
        return (
            <div>
                <div>
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Tooltip title="Reminder">
                            <img src={require('../assets/image/Reminder.svg')}
                                alt="Reminder notes"
                                onClick={(e) => this.handleReminder(e)} />
                        </Tooltip>
                    </ClickAwayListener>

                    <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }}>
                        <Paper className="">
                            <div> Reminder ? </div>
                            <div>
                                <MenuItem onClick={this.setLaterToday}>Later Today</MenuItem>
                                <MenuItem onClick={this.settomorrow}>Tomorrow</MenuItem>
                                <MenuItem onClick={this.setnextWeek}>Next Week</MenuItem>
                            </div>
                        </Paper>
                    </Popper>
                </div>
            </div>
        )
    }
}
export default withRouter(TrashComponent)