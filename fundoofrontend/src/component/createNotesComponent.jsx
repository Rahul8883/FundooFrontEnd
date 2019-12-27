import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from '@material-ui/core'
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlined';
import AddAlertOutlineIcon from '@material-ui/icons/AddAlertOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import InputBase from '@material-ui/core/InputBase';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import { createNote } from '../services/notesServices';
import ColorComponent from '../component/ColorComponenet'
import MoreComponent from '../component/MoreComponent'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class CreateNotesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openNote: false,
            title: "",
            description: "",
            color: "",
            newNotes: {},
            reminder: "",
            isArchived: false,
            labelIdList: "",
            lebal: "",
            addedNote:[]
        }
    }
    handleListener = () => {
        this.setState({
            openNote: false
        })
    }
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
        })
        console.log("open notes", this.state.openNote);
    }
    handleTitle = (event) => {
        let title = event.target.value
        this.setState({
            title: title
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
    handleColor = (value) => {
        this.setState({
            color: value
        })
    }
    handleArchive = () => {
        this.setState({
            isArchived: true
        })
        console.log("archive create check..", this.state.isArchived);
    }
    handleReminder = (value) => {
        this.setState({
            reminder: value
        })
        console.log("reminder create check", this.state.reminder);
    }
    handleDeletereminder = () => {
        this.setState({
            reminder: ''
        })
    }
    handleClose = () => {
        this.setState({
            openNote: false,
        })
        var data = {
            title: this.state.title,
            description: this.state.description,
            color: this.state.color,
            // reminder: this.state.reminder,
            // isArchived: this.state.isArchived,
        }
        console.log("data addnote back-end", data);
        try {
            createNote(data).then((result) => {
                console.log("result in create note component for add notes", result);
                this.setState({
                    addedNote:result.data.status.details
                })
                this.props.addNotesProps(this.state.addedNote)
                this.setState({
         
                    title:"",
                    description:"",
                    color:""
                })
                console.log("add note after setstate",this.state.addedNote);
                
            }).catch((err) => {
                console.log("err occure while hitting back-end", err);
            })
        } catch (err) {
            console.log("Error occur during back-end hitting", err);

        }
    }
    hanNoteColor = async(col) => {
        console.log("colr in getnote",col);
      await this.setState({
            color: col,
        })
        // console.log("response coming from color componenet", data);
        // changeColor(data).then((res) => {
        //     console.log("Response while hettinf back-end Api after create note bg color", res);
        //     this.getAllNotes();

        // }).catch((err) => {
        //     console.log("error occur while hetting back-end", err);

        // })

    }

    render() {
        return (
            !this.state.openNote ?
                (
                    <div className="createNote_container"
                        onClick={this.handleOpenNotes}>
                        <Card className="CreateNote_Card1" style={{ boxShadow: "0px 0px 4px 1px"}}>
                            <div classname="createNote_input_base" style={{padding:"4px"}}>
                                <InputBase
                                    className="CreateNote_TextField"
                                    placeholder="Take a note..."
                                    multiline
                                    spellCheck={true}
                                    style={{marginleft: "10px"}}
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
                    <div className="createNote_container">
                <ClickAwayListener onClickAway={this.handleListener}>
                            <Card className="CreateNote_Card1" style={{ backgroundColor: this.state.color, boxShadow: "0px 0px 4px 1px" }}>
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
                                                {/* <PaletteIcon
                                                className="iconEffect"
                                            /> */}
                                                <ColorComponent
                                                    propsToColorPallate={this.hanNoteColor}
                                                    notesId={''}
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
                                               <MoreComponent
                                                    className="iconEffect"
                                                />
                                            </div>
                                          {/*  <div>
                                                <UndoIcon
                                                    className="iconEffect"
                                                />
                                            </div>
                                            <div>
                                                <RedoIcon
                                                    className="iconEffect"
                                                />
                                          </div>*/}
                                        </div>
                                        <div className="closeButton">
                                            <Button
                                               
                                                style={{ margin: "spacing.unit" }}
                                                onClick={this.handleClose}
                                                // onClick={this.handleListener}
                                            >Close
                                        </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                                          </ClickAwayListener>
                    </div>

                )
        )
    }
}
export default withRouter(CreateNotesComponent)
