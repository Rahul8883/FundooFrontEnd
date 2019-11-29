import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, ClickAwayListener, MenuItem, Button, Card, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { profilePicUpload } from '../services/userProfile';

// import { Logout } from '../services/userProfile';
const url = "http://fundoonotes.incubation.bridgelabz.com/api"
export class ProfileImgComponenet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            profilePic: ""
        }
    }
    componentDidMount() {
        if (localStorage.getItem("profilePic") !== undefined) {
            this.setState({
                profilePic: url + localStorage.getItem("profilePic")
            })
        }
    }
    handleProfile = (event) => {
        this.setState({
            selectFile: event.target.file[0].name
        })
        console.log("Handle_Profilre_Pic", this.state.selectFile);
        const formData = new formData();
        formData.append('file', event.target.file[0])
        // uploadProfile

        profilePicUpload(formData).then((res) => {
            console.log("--------------------", res);
            console.log("hjgfhdasgfjfahfafdfaf", res.data.status.imageUrl);
            this.setState({
                profilePic: url + res.data.status.imageUrl
            })
            console.log("finially upload profile pic", this.state.profilePic);
        }).catch((err) => {
            console.log("Error Occur while hetting upload profile pic back-end Api", err);

        })

    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleMore = (e) => {
        console.log("notes id is ", this.props.notesId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
            trashNotesId: this.props.notesId
        });
    }
    handleLogout = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClose}>
                    <AccountCircleIcon onClick={(e) => this.handleMore(e)} />
                </ClickAwayListener>

                <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }} className="profile_logout">
                    {/*<Paper className="profile_logout">
                   
                       
        </Paper>*/}
                    <div className="profile_logout">
                        <Card style={{
                            height: "108px",
                            width: "245px",
                            marginLeft: "151px",
                            padding: "15px",
                            marginTop: "22px",
                            backgroundColor: "#f7f7f7"
                        }}>
                            <IconButton>
                                <Avatar> {this.state.profilePic !== "" ?
                                    <img style={{ width: "41px", height: "41px" }} src={this.state.profilePic} alt="pic">
                                    </img>
                                    :
                                    <b style={{ backgroundColor: "black" }}></b>}
                                </Avatar>
                            </IconButton>
                            <div className="userdataset">
                                <Avatar type="file" onClick={this.handleprofile} style={{ width: "120px", height: "120px" }}>
                                    {this.state.profilePic !== "" ?
                                        <img style={{ width: "118px", height: "118px" }} src={this.state.profilePic} alt="pic">
                                        </img>
                                        :
                                        <b style={{ backgroundColor: "black" }}>
                                        </b>
                                    }
                                </Avatar> <div className="nameEmailProfile">
                                    <div className="firstLastName">
                                        <label >
                                            <b>
                                                {localStorage.getItem('firstName')}
                                            </b>
                                            <b>
                                                {localStorage.getItem('lastName')}
                                            </b>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            {localStorage.getItem('email')}
                                        </label>
                                    </div>
                                </div>
                            </div>
                       
                        <div>
                            <Button onClick={this.handleLogout} className="signOut" style={{
                                marginLeft: "158px",
                                marginTop: " 77px",
                                backgroundColor: "lightgrey"
                            }}>Sign out</Button>
                        </div>
                        </Card>
                    </div>
                </Popper>


            </div >



        )
    }
}

export default withRouter(ProfileImgComponenet)













// render()
// {
//     return (
//         <PopupState variant="popper" > {popupState =>
//             (
//                 <div > <IconButton {...bindToggle(popupState)}>
//                     <Avatar> {this.state.profilePic !== "" ?
//                         <img style={{ width: "41px", height: "41px" }} src={this.state.profilePic} alt="pic">
//                         </img>
//                         :
//                         <b style={{ backgroundColor: "black" }}></b>}
//                     </Avatar>
//                 </IconButton>
//                     <Popper {...bindPopper(popupState)}>
//                         <Paper className="profilepaper">
//                             <br></br>
//                             <div >
//                                 <div className="userdataset">
//                                     <Avatar type="file" onClick={this.handleprofile} style={{ width: "120px", height: "120px" }}>
//                                         {this.state.profilePic !== "" ?
//                                             <img style={{ width: "118px", height: "118px" }} src={this.state.profilePic} alt="pic">
//                                             </img>
//                                             :
//                                             <b style={{ backgroundColor: "black" }}>
//                                             </b>
//                                         }
//                                     </Avatar> <div className="nameEmailProfile">
//                                         <div className="firstLastName">
//                                             <label >
//                                                 <b>
//                                                     {localStorage.getItem('firstName')}
//                                                 </b>
//                                                 <b>
//                                                     {localStorage.getItem('lastName')}
//                                                 </b>
//                                             </label>
//                                         </div>
//                                         <div>
//                                             <label>
//                                                 {localStorage.getItem('email')}
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <MenuItem onClick={this.Logout} >
//                                     <Button id="logoutButton">
//                                         <b>Sign Out</b>
//                                     </Button>
//                                 </MenuItem>
//                             </div>
//                         </Paper>
//                     </Popper>
//                 </div>
//             )}
//         </PopupState>
//     )
// }}
// export default Dropdown;