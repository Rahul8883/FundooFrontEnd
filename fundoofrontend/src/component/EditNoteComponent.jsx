import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { updateNote } from "../services/notesServices";

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
export class EditNoteComponent extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    handleUpdate=(noteIdList,color, title, description)=>{
        console.log("note id list",noteIdList);
        
          this.setState({
              open : false,
              noteIdList: noteIdList,
              title:title,
              description : description
          })
            let data={
                notesId:[this.state.noteIdList],
                title: this.state.title,
                description: this.state.description,
    
            }
            updateNote(data).then((result)=>{
                console.log("response while heatting back-end Api", this.state.result);
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
    render() {
        return (
            <div>
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
                <Button onClick={this.handleClose} color="primary">
                    Close
</Button>
            </DialogActions>
        </Dialog> 
            </div>
        )
    }
}

export default EditNoteComponent
