import React, { Component } from 'react'
import { Tooltip } from '@material-ui/core';
import { TrashNotes, getNote } from '../services/notesServices';
import { withRouter } from "react-router-dom";
class TrashComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            notes: []
        }
    }
    componentDidMount() {
        this.getAllNotes()
    }
    getAllNotes = () => {
        getNote().then(res => {
            console.log("res of get note in trash component", res);
            this.setState({
                notes: res.data.data.data
            })

        }).catch(err => {
            console.log("err", err);

        })
    }
    handleTrash = () => {
        console.log("props.note id in trash component", this.props.noteIdToTrash);
        var data = {
            noteIdList: [this.props.noteIdToTrash],
            isDeleted: true
        }
        TrashNotes(data).then((res) => {
            console.log("response from Trash", res);
            // this.props.refreshTrash(true)
            this.getAllNotes()
        }).catch((err) => {
            console.log("Error occure while hitting archive Api ", err);

        })
    }
    render() {
        return (
            <div>
                <Tooltip>
                    <div className="MoreItem"
                        onClick={this.handleTrash}>Delete note</div>
                </Tooltip>
            </div>
        )
    }
}
export default withRouter(TrashComponent)