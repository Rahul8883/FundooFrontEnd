import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, InputBase } from "@material-ui/core";
import AddAlertOutlineIcon from "@material-ui/icons/AddAlertOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import { getNote, changeColor, updateNote } from "../services/notesServices";
import ColorComponenet from '../component/ColorComponenet'
import ArchivedComponent from "./ArchivedComponent";
import MoreComponent from "./MoreComponent";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
// import { updateNote } from "../services/notesServices";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
class GetNoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteId: "",
            color: "",
            notes: [],
            openNote: false,
            title:"",
            description:""
        };
    }
    handleUpdate=( title,noteId,color, description)=>{
        // console.log("note id list",noteIdList);
        
          this.setState({
            title:title,
            openNote: false ,
            noteId: noteId,
              description : description,
              color:color
          })
            let data={
                noteId:this.state.noteId,
                title: this.state.title,
                description: this.state.description,
    
            }
            console.log('====================================');
            console.log("hfdzsyueasoiogfuasos", data);
            console.log('====================================');
            updateNote(data).then((result)=>{
                console.log("response while heatting back-end Api", result);
                this.getAllNotes()
            }).catch((err)=>{
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
    render() {
        return (
            !this.state.openNote ?
                (
                    <div className="get-container"
                    >
                        {this.state.notes.map((data) => {
                            console.log("create note final data",data);
                            
                            return (
                                data.isArchived === false && data.isDeleted === false &&
                                <div className="get-Whole-Card">
                                    <div className="get-card-effect">
                                        <Card className="get-cards1" onClick={this.handleCardClick} style={{ padding: "1em",    margin: "5px", borderradius: "14px", backgroundColor: data.color }}>
                                            <div className="get-cardDetails"
                                            onClick={this.handleClickOpen}>
                                                <InputBase value={data.title}
                                                    multiline
                                                    onClick={()=>this.handleUpdate(data.title, data.id,data.color, data.description)}
                                                >
                                                </InputBase>
                                                <InputBase value={data.description}
                                                    multiline
                                                    onClick={()=>this.handleUpdate(data.title, data.id,data.color, data.description)}
                                                >
                                                </InputBase>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    width: "260px"
                                                }}
                                            >

                                                <div>
                                                    <AddAlertOutlineIcon className="iconEffect" />
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
                                                    <MoreComponent notesId={data.id} />
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
