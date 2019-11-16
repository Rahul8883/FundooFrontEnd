import React, { Component } from 'react'
import {Tooltip} from '@material-ui/core';
import { addReminder } from '../services/notesServices';
import { withRouter } from "react-router-dom";
class TrashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reminser :"",
            noteIdList : "",
            open: false,
            
        }
    }
    handleReminder = () => {
        // console.log("props.note id in trash component",this.props.noteIdToTrash);
        // var data = {
        //     noteIdList: [this.props.noteIdToTrash],
        //     isDeleted: true
        // }
        addReminder(data).then((res) => {
            console.log("response from reminder", res);
            this.props.refreshTrash(true)
        }).catch((err) => {
            console.log("Error occure while hitting reminder Api ", err);
        })
    }
    render() {
        console.log("props in archive",this.props.notesId); 
        return (
            <div>
                <Tooltip>
                <img src={require('../assets/image/Reminder.svg')}
                alt="Reminder notes"
                onClick={this.handleReminder}/>
                </Tooltip>
            </div>
        )
    }
}
export default withRouter(TrashComponent)