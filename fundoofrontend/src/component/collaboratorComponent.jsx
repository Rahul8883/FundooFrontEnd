import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, Avatar, DialogActions, Button, Input, List, ListItemText, Hidden } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { getUserList, searchUserList, Addcollaborators, RemoveCollaborators } from '../services/collaboratorService';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
const url = "http://fundoonotes.incubation.bridgelabz.com/";

const theme = createMuiTheme({
    overrides: {
        MuiDialogTitle:{
            root:{
                padding: "0px"
            }
        },
        MuiDialog:{
            paper:{
                margin:"0px",
                width: "45%"
            }
        }
    }
}); 


        // MuiDialog: {
        //     paperWidthSm: {
        //         "max-width": 622,
        //         "width": 535,
        //         "height": "auto",
        //         "border-radius": "16px"
        //     },
        // },
        // MuiInput: {
        //     root: {
        //         560: {
        //             364: {
        //                 position: "relative",
        //                 width: 427,
        //                 "padding-left": 20,
        //             }
        //         },
        //         442: {
        //             560: {
        //                 " margin-left": 29,
        //                 width: 441,
        //             }
        //         }
        //     }
        // },
        // MuiDialogContent: {
        //     root: {
        //         359: {
        //             overflow: "hidden",
        //         }
        //     }
        // }

export default class CollaboratorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            AllUsers: [],
            ListUsers: [],
            text: "",
            collaborator: [],
            getAllCollab: []
        }
    }
    componentDidMount() {
        getUserList()
            .then(response => {
                 console.log("response user",response);
                let UserList = response.data.map((key) => {
                    return key.email
                })
                this.setState({
                    AllUsers: UserList
                })
                 console.log("all list", this.state.AllUsers);
            })
            .catch(err => {
                console.log("error in collab", err);
            })
    }
    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    // getAllcollab=()=>{
    //         getNotes()
    //             .then(result => {

    //                 this.setState({
    //                     note: result.data.data.data,
    //                 })
    //                 console.log(" all note data==>", this.state.note);
    //             },
    //                 error => {
    //                     console.log(error);
    //                 }); 

    // }
    // gettingColaabs=async()=>{
    //   await  this.setState({
    //         getAllCollab:this.props.collaborators
    //     })
    //     console.log("collaborator check", this.state.getAllCollab);
    // }



    handleOnchange = (e) => {
        const value = e.target.value;
        console.log("onchange vaklue", value);
        let ListUsers = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            ListUsers = this.state.AllUsers.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({
            ListUsers: ListUsers,
            text: value
        }))
        console.log("handle change : ", this.state.ListUsers);
    }



    selectValue(value) {
        this.setState(() => ({
            text: value,
            ListUsers: []
        }))
        var data = {
            "searchWord": value
        }
        searchUserList(data)
            .then((response) => {
                console.log("response from search list....", response);
                this.setState({
                    collaborator: response.data.data.details
                })
                console.log("final data in collab==>", this.state.collaborator);
        //      localStorage.setItem('firstName',collaborator.firstName)

        //    localStorage.setItem('lastName',collaborator.lastName)

        //       localStorage.setItem('email', collaborator.email)

            })
            .catch(err => {
                console.log("Error in serach User List ", err);
            })
    }



    renderSuggetions = () => {
        // const { ListUsers } = this.state;
        if (this.state.ListUsers.length === 0) {
            return null;
        }
        return (
            <List>
                {this.state.ListUsers.map((users) =>
                    <ListItemText onClick={() => this.selectValue(users)} style={{ "overflow": "Hidden" }}>
                        {users}
                    </ListItemText>)}
            </List>
        )
    }
    handleCollabClick = () => {
        
        var collab = this.state.collaborator.map((key) => {
            
        })
        console.log("collaborator email==>", this.state.collab);
        Addcollaborators(collab[0], this.props.noteID)
            .then((response) => {
                this.setState({
                    open: false
                })
                console.log("Collaborate successfully", response);
            })
            .catch(err => {
                console.log("Error in collaboration", err);
            })
    }



    handleDeleteCollab = (id, collabId) => {
        RemoveCollaborators(id, collabId)
            .then(response => {
                console.log("RES_FROM_DELETE_COLLAB", response);
            })
            .catch(error => {
                console.log("ERR_IN_REMOVING_COLLAB", error);
            })
    }



    render() {
        console.log(this.state.getAllCollab);
        return (
            <div>
                <div onClick={this.handleOpen}>
                    <PersonAddIcon/>
                </div>
                <MuiThemeProvider theme={theme}>
                    <Dialog className="dialog"
                        open={this.state.open}
                        onClose={this.handleClose}
                        style={{ overflow: Hidden }}>
                      <MuiThemeProvider theme={theme}>
                        <DialogTitle>
                            <div style={{borderBottom: "1px solid rgba(0,0,0,0.15)",
                                padding: "8px",padding:"0px 0px",
                                backgroundColor: "rgba(0,0,0,0.07)"}}>Collaborator</div>
                        </DialogTitle>
                        </MuiThemeProvider>

                        <DialogContent style={{ "overflow-y": "visible" }}>
                         
                        
                        <div className="collabUserData" >
                                <Avatar>
                                    <img style={{
                                        width: "41px", height: "41px"
                                    }}
                                        src={url + (localStorage.getItem("ProfilePic"))} alt="profile Pic">
                                    </img>
                                </Avatar>


                                <div>
                                  
                                <div className="colabName">
                                        <div className="colabfirstName"> <b>{localStorage.getItem('firstName')}</b></div>
                                        <div className="colablastName"><b>{localStorage.getItem('lastName')}</b>  ( Owner )</div>
                                    </div>
                                  
                                    <div className="colabEmail" >
                                        {localStorage.getItem('email')}
                                    </div>
                                </div>


                            </div>
                        </DialogContent>
                        <DialogContent style={{ overflowY: "visible" }}>
                            {
                                this.props.collaborators.map((key => {
                                    console.log(key);
                                    return (
                                       
                                       
                                        <div className="userList_collab">
                                            <div>
                                                <Avatar>


                                                </Avatar>
                                            </div>


                                            <div style={{ display: "flex", width: "336px" }}>
                                                <div style={{ paddingLeft: "29px" }}>
                                                    <span>
                                                     {key.email}
                                                    </span>
                                                </div>
                                                <div>
                                                    <ClearIcon onClick={() => this.handleDeleteCollab(this.props.noteID, key.userId)} />
                                                </div>
                                            </div>
                                        </div>
                                    )

                                }))

                            }
                        </DialogContent>
                      
                      
                        <DialogContent style={{ "overflow": "hidden" }}>
                            <div className="userList_collab">
                                <Avatar>
                                {/**
                                we have to set icon here
                                */}
                                </Avatar>
                              
                                <div  className="InputForAddEmail">
                                    <Input className="colabUserData"
                                        value={this.state.text}
                                        placeholder="Person or Email to share with"
                                        disableUnderline={true}
                                        onChange={this.handleOnchange}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </DialogContent>
                       
                       
                       
                        <div>
                            <List className="collabUser"
                                style={{ overflow: Hidden }} >{this.renderSuggetions()}
                            </List>
                        </div>




                        <DialogActions style={{backgroundColor: "rgba(0,0,0,0.07)", display:"flex"}}>
                            <div className="collabUserData" style={{ display:"flex"}}>
                                <div >
                                    <Button onClick={this.handleClose}><b>Cancel</b></Button>
                                </div>
                                <div>
                                    <Button onClick={this.handleCollabClick}><b>Save</b></Button>
                                </div>
                            </div>
                        </DialogActions>

                    </Dialog>
                    </MuiThemeProvider>
            </div>
        )
    }
}
