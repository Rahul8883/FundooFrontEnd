import React, { Component } from 'react'
import { Tooltip } from '@material-ui/core';
import { Paper, Popper, ClickAwayListener, MenuItem } from '@material-ui/core';

// import { addReminder } from '../services/notesServices';
import { withRouter } from "react-router-dom";
import { UpdateReminder } from '../services/notesServices';
class TrashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminder: "",
            noteIdList: "",
            open: false,
            ReminderNotesId : ""
        }
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleReminder = (e) => {
        console.log("notes id is ", this.props.notesId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId: this.props.notesId
        });
    }
    // handleReminder = () => {
    //     // console.log("props.note id in trash component",this.props.noteIdToTrash);
    //     // var data = {
    //     //     noteIdList: [this.props.noteIdToTrash],
    //     //     isDeleted: true
    //     // }
    //     addReminder(data).then((res) => {
    //         console.log("response from reminder", res);
    //         this.props.refreshTrash(true)
    //     }).catch((err) => {
    //         console.log("Error occure while hitting reminder Api ", err);
    //     })
    // }




    /**
     *  laterTodayReminder() {
    try {
      var date = new Date();
      let reminder = date.setHours(20, 0, 0);
      let data = {
        "noteIdList": [this.card.id],
        "reminder": reminder
      }
      this.noteService.setReminder(data).subscribe(res => {
        this.reminderEvent.emit();
        console.log("res in later today reminder-->", res);
      })
    } catch (err) { console.log("error in later today reminder") }
  }
     */
    setLaterToday = (notesId) => {
        try {
            var date = new Date();
            let reminder = date.setHours(20, 0, 0);
            let data = {
                noteIdList: [this.props.ReminderNotesId],
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
        // UpdateReminder(data).then((res)=>{
        //     console.log("Res_While_hetting_Back-End", res);


        // })
    }
    settomorrow = () => {

    }
    setnextWeek = () => {

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
                                <MenuItem onClick={()=>this.setLaterToday(this.props.ReminderNotesId)}>Later Today</MenuItem>
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