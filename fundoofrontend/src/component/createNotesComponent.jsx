import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from '@material-ui/core'
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlined';
import AddAlertOutlineIcon from '@material-ui/icons/AddAlertOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import InputBase from '@material-ui/core/InputBase';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import { createNote } from '../services/notesServices';
// import {createNote} from '../services/notesServices'
class CreateNotesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: false,
            Title: "",
            description: "",
            color: "",
            newNotes: {},
            reminder: "",
            archive: false,
            imageNotes: [],
            lebal: ""
        }
    }

    /*------------------------use to handle Open notes--------------------*/

    handleOpenNote = () => {
        console.log("For Opening the note page", this.state.openNote);
        this.setState({
            openNote: !this.state.openNote
        })
        console.log("For Opening the note aftere", this.state.openNote);

    }

    handleNotes = () => {
        this.setState({
            openNote: !this.state.openNote,
            title: "",
            description: "",
            color: "",
            labelIdList: "",
            open: false,
            reminder: "",
            imageUrl: ""
        })
        console.log("open notes", this.state.openNote);

    }

    handleTitle = (event) => {
        let Title = event.target.value
        this.setState({
            title: Title
        })
        console.log("title is ", this.state.title);

    }

    handleDescription = (event) => {
        let description = event.target.value
        this.setState({
            description: description
        })
        console.log("description is ", this.state.description);
    }

    handleColor = (event) => {
        const color = this.target.value
        this.setState({
            color: color
        })
    }

    handleArchive = (event) => {
        const description = this.target.value
        this.setState({
            description: description
        })
    }

    handleReminder = (event) => {
        const reminder = this.target.value
        this.setState({
            reminder: reminder
        })
    }

    handleDeletereminder = () => {
        this.setState({
            reminder: ''
        })
    }

    async sendImageProps(file) {
        await this.setState({
            imageUrl: file.toString()
        })
        console.log("image in create notes", this.state.imageUrl)
    }

    handleClose = () => {
        var data = {
            title: this.state.title,
            description: this.state.description,
            // color: this.state.color,
            // reminder: this.state.reminder,
            // archive: this.state.archive,
        }
        console.log("data addnote back-end", data);
        try {
            createNote(data).then((result) => {
                console.log("result in create note component for add notes", result);
            }).catch((err) => {
                    console.log("err occure while hitting back-end", err);
                })
        } catch (err) {
            console.log("Error occur during back-end hitting", err);

        }
    }

    render() {
        return (
            !this.state.openNote ?
                (
                    <div className="createNote_container"
                        onClick={this.handleOpenNotes}>
                        <Card className="CreateNote_Card1" >
                            <div classname="createNote_input_base">
                                <InputBase
                                    className="CreateNote_TextField"
                                    placeholder="Take a note..."
                                    multiline
                                    spellCheck={true}
                                    onClick={this.handleNotes}
                                />
                            </div>
                            <div className="first_Card_icons">
                                <div>
                                    <CheckBoxOutlineIcon />
                                </div>
                                <div>
                                    <EditIcon />
                                </div>
                                <div>
                                    <ImageIcon />
                                </div>
                            </div>

                        </Card>
                    </div>
                )
                :
                (
                    <div className="SecondCard_createNotes">
                        <Card className="CreateNote_Card1">
                            <div>
                                <div className="input_field">
                                    <div>
                                        <InputBase
                                            placeholder="Title"
                                            multiline
                                            spellCheck={true}
                                            onChange={this.handleTitle}
                                        />
                                    </div>
                                    <div>
                                        <InputBase
                                            placeholder="Take a note...."
                                            multiline
                                            spellCheck={true}
                                            onChange={this.handleDescription}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "129%" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "320px" }}>
                                        <div>
                                            <AddAlertOutlineIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <PersonAddIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <PaletteIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <ImageIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <ArchiveIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <MoreVertIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <UndoIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                        <div>
                                            <RedoIcon
                                                className="iconEffect"
                                            />
                                        </div>
                                    </div>
                                    <div className="closeButton">
                                        <Button
                                            //  style={{display:"flex", justifyContent:"space-between", width :"129%"}}
                                            style={{ margin: "spacing.unit" }}
                                            onClick={this.handleClose}
                                        >Close
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    </div>
                )
        )
    }
}
export default withRouter(CreateNotesComponent)
