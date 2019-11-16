import React, { Component } from 'react'
import {Tooltip} from '@material-ui/core';
import { archiveNotes } from '../services/notesServices';
import { withRouter } from "react-router-dom";
class ArchivedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isArchived: false,
            noteIdList: "",
            note: []
        }
    }
    handleArchive = () => {
        var data = {
            isArchived: true,
            noteIdList: [this.props.notesId]
        }
        archiveNotes(data).then((res) => {
            console.log("response from archive", res);
            this.props.refreshArchive(true)
            console.log("Response of archived data", this.state.note);

        }).catch((err) => {
            console.log("Error occure while hitting archive Api ", err);

        })
    }
    render() {
        console.log("props in archive",this.props.notesId);
        
        return (
            <div>
                <Tooltip>
                    <img src={require('../assets/image/Archive.svg')}
                        alt="Archive notes"
                        onClick={this.handleArchive}
                    />
                </Tooltip>
            </div>
        )
    }
}
export default withRouter(ArchivedComponent)