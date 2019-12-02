import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, InputBase, Chip, Tooltip } from "@material-ui/core";
import AddAlertOutlineIcon from "@material-ui/icons/AddAlertOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import { getNote, changeColor, updateNote, removeLabelFromNote } from "../services/notesServices";
import ColorComponenet from '../component/ColorComponenet'
import ArchivedComponent from "./ArchivedComponent";
import MoreComponent from "./MoreComponent";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ReminderComponent from '../component/ReminderComponent'
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
function titleDesSearch(SearchText) {
    return function (x) {
        return x.title.includes(SearchText) || x.description.includes(SearchText)
    }
}
class GetNoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: "",
            color: "",
            notes: [],
            openNote: false,
            title: "",
            description: ""
        };
    }


    handleUpdate = (title, noteId, color, description) => {
        this.setState({
            title: title,
            openNote: false,
            noteId: noteId,
            description: description,
            color: color
        })
        let data = {
            noteId: this.state.noteId,
            title: this.state.title,
            description: this.state.description,
        }
        console.log("hfdzsyueasoiogfuasos", data);
        updateNote(data).then((result) => {
            console.log("response while heatting back-end Api", result);
            this.getAllNotes()
        }).catch((err) => {
            console.log("Error while heatting back-end Api of update note", err);
        })
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
    handleClickOpen = () => {
        this.setState({ openNote: true });
    };
    handleClose = () => {
        this.setState({ openNote: false });
    };
    hanNoteColor = (col, notesId) => {
        let data = {
            color: col,
            noteIdList: [notesId]
        }
        console.log("response coming from color componenet", data);
        this.setState({
            color: col
        })
        changeColor(data).then((res) => {
            console.log("Response while hettinf back-end Api", res);
            this.getAllNotes();

        }).catch((err) => {
            console.log("error occur while hetting back-end", err);
        })
    }
    componentDidMount() {
        this.getAllNotes();

    }
    getAllNotes = () => {
        getNote()
            .then(result => {
                this.setState({
                    notes: result.data.data.data
                });
                console.log("all notes data ", this.state.notes);
            })
            .catch(err => {
                console.log("Erroe occur while taking all notes", err);
            });
    }
    handleCardClick = () => {
        console.log("triggered");
    }
    handleRefreshArchive = () => {
        if (true) {
            this.getAllNotes()
        }
    }
    displayRef = (value) => {
        console.log("ref value in getnote", value);
        this.setState({
            notes: [...this.state.notes, value]
        })
    }
    handleDelete = (noteId, labelId) => {
        var data = {
            "noteId": noteId,
            "labelId": labelId
        }
        console.log("sukyghfaajrghfdasukghsdjgh", data);

        removeLabelFromNote(data, noteId, labelId).then((res) => {
            console.log("response coming from delete label from notes from back-end", res);
            this.getAllNotes();
        }).catch((err) => {
            console.log("error in note label", err);
        })
    }
    handleRefNotesByLabel = (isTrue) => {
        if (isTrue) {
            this.getAllNotes()
        }
    }
   
    render() {
        var transition = this.props.shiftDrawer ? "transition-left" : "transition-right"
        var iconList=this.props.iconChoose? "GridViewCss":"listViewCss"
        console.log("-----------------------",this.props.iconChoose);
        
        return (
            !this.state.openNote ?
                (
                    // get-container
                    <div className={iconList}>
                        {this.state.notes.filter(titleDesSearch(this.props.SearchText)).map((data) => {
                            console.log("create note final data", data);

                            return (
                                data.isArchived === false && data.isDeleted === false && 
                                <div className="get-Whole-Card">
                                    <div className="get-card-effect">
                                        <Card className="get-cards1" onClick={this.handleCardClick}
                                            style={{
                                                boxShadow: "3px 2px 9px 2px rgba(0,0,0,0.2), 1px 1px 2px 1px rgba(0,0,0,0.14), 3px 2px 3px 2px rgba(0,0,0,0.12)", borderRadius: "15px", padding: "1em", margin: "5px", borderradius: "14px", backgroundColor: data.color

                                                , transform: (this.props.shiftDrawer) ? "translate(80px,0)" : (null)
                                            }}>

                                            <div className="get-cardDetails"
                                                onClick={this.handleClickOpen}>
                                                <InputBase
                                                 value={data.title}
                                                    multiline
                                                    onClick={() => this.handleUpdate(data.title, data.id, data.color, data.description)}
                                                >
                                                <br></br>
                                                </InputBase>
                                                <InputBase value={data.description}
                                                    multiline
                                                    onClick={() => this.handleUpdate(data.title, data.id, data.color, data.description)}
                                                >
                                                </InputBase>
                                            </div>
                                            <div>
                                                {data.noteLabels.map(key => {
                                                    console.log("labels_data", key);

                                                    localStorage.setItem("labelId", data.id)
                                                    return (
                                                        <Tooltip title="Label">
                                                            <Chip style={{ backgroundColor: "rgba(0,0,0,0.08)" }} className="chip" onDelete={() => this.handleDelete(data.id, key.id)}
                                                                icon={<TagFacesIcon style={{ color: "black" }} />}
                                                                label={key.label}>
                                                            </Chip>
                                                        </Tooltip>
                                                    );
                                                })}
                                            </div>
                                            <div>
                                                {console.log("data in get note comp------", data.reminder)}

                                                {data.reminder.map(key => {
                                                    console.log("reminder_data---------", key);
                                                    return (
                                                        <Tooltip title="Reminder">
                                                            <Chip style={{ backgroundColor: "rgba(0,0,0,0.08)" }} className="chip"
                                                                
                                                                label={data.reminder}
                                                            >
                                                            </Chip>

                                                        </Tooltip>


                                                    )
                                                })}
                                            </div>
                                            <div className="get_Note_Icon">
                                                <div>
                                                    <ReminderComponent className="iconEffect"
                                                        reminderNoteId={data.id} />
                                                </div>
                                                <div>
                                                    <PersonAddIcon className="iconEffect" />
                                                </div>
                                                <div>
                                                    <ColorComponenet
                                                        className="iconEffect"
                                                        propsToColorPallate={this.hanNoteColor}
                                                        notesId={data.id}
                                                    />
                                                </div>
                                                <div>
                                                    <ImageIcon className="iconEffect" />
                                                </div>
                                                <div>
                                                    <ArchivedComponent notesId={data.id}
                                                        refreshArchive={this.handleRefreshArchive} className="iconEffect" />
                                                </div>
                                                <div>
                                                    <MoreComponent notesId={data.id}
                                                        createlabelPropsToMore={this.handleRefNotesByLabel} />
                                                </div>
                                            </div>

                                        </Card>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
                :
                (
                    <Dialog
                        open={this.state.openNote}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Edit Note?"}
                        </DialogTitle>
                        <DialogContent>
                            <div>
                                <InputBase
                                    placeholder="Title"
                                    multiline
                                    spellCheck={true}
                                    value={this.state.title}
                                    onChange={this.handleTitle}
                                />
                            </div>
                            <div>
                                <InputBase
                                    placeholder="Take a note...."
                                    multiline
                                    spellCheck={true}
                                    value={this.state.description}
                                    onChange={this.handleDescription}
                                />
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleUpdate} color="primary">
                                Close
                         </Button>
                        </DialogActions>
                    </Dialog>
                )
        );
    }
}
export default withRouter(GetNoteComponent);
