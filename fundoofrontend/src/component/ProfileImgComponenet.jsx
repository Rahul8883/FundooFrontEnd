import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, ClickAwayListener, MenuItem, Button, Card, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import { profilePicUpload } from '../services/userProfile';
import ReactCrop from 'react-image-crop';

import Fade from '@material-ui/core/Fade';
// import { Logout } from '../services/userProfile';
const url = "http://fundoonotes.incubation.bridgelabz.com/api"

// function CropDemo({ src }) {
//     const [crop, setCrop] = useState({ aspect: 16 / 9 });
//     return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
//   }
export class ProfileImgComponenet extends Component {
    constructor(props) {
        super(props)
      this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            profilePic: "",

        };
    }
    handleClick = placement => event => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: state.placement !== placement || !state.open, placement,
        }));
    };



    componentDidMount() {
        if (localStorage.getItem("profilePic") !== undefined) {
            this.setState({
                profilePic: localStorage.getItem("profilePic")
            })
        }
    }
    handleProfile = (event) => {
        // this.setState({
        //     selectFile: event.target.file[0].name
        // })
        console.log("Handle_Profilre_Pic", this.state.selectFile);
        const formData = new formData();
        // formData.append('file', event.target.file[0])


        profilePicUpload(formData).then((res) => {
            console.log("--------------------", this.state.res);
            // console.log("res coming while hitting back-end Api", res.data.status.imageUrl);
            // this.setState({
            //     profilePic: url + res.data.status.imageUrl
            // })
            // console.log("finially upload profile pic", this.state.profilePic);
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
    handleSubmitSignOut = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }
    render() {
        const { anchorEl, open, placement } = this.state;

        return (
            <div className="profile_Root">
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <div className='img_name_email'>
                                    <div>
                                        <Avatar alt="Remy Sharp" onClick={this.handleProfile} src={this.state.profilePic} className='profile_Big_Avatar' />
                                    </div>
                                    <div>
                                        <div>
                                           name  
                                        </div>
                                        <div>

                                       last

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        onClick={this.handleSubmitSignOut}
                                        color='primary' style={{ fontSize: 18, fontFamily: 'TimesNewRoman' }} variant="outlined">SignOut</Button>

                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <Avatar alt="Remy Sharp" src={this.state.profilePic} onClick={this.handleClick('bottom')} />
            </div>
        )
    }












    //         <div>
    //             <ClickAwayListener onClickAway={this.handleClose}>
    //                 <AccountCircleIcon onClick={(e) => this.handleMore(e)} />
    //             </ClickAwayListener>

    //             <Popper open={this.state.anchorEl} anchorEl={this.state.anchorEl} style={{ zIndex: "9999" }} className="profile_logout">
    //                 {/*<Paper className="profile_logout">


    //     </Paper>*/}
    //                 <div className="profile_logout">
    //                     <Card style={{
    //                         height: "108px",
    //                         width: "245px",
    //                         marginLeft: "151px",
    //                         padding: "15px",
    //                         marginTop: "22px",
    //                         backgroundColor: "#f7f7f7"
    //                     }}>
    //                         <IconButton>
    //                             <Avatar> {this.state.profilePic !== "" ?
    //                                 <img style={{ width: "41px", height: "41px" }} src={this.state.profilePic} alt="pic">
    //                                 </img>
    //                                 :
    //                                 <b style={{ backgroundColor: "black" }}></b>}
    //                             </Avatar>
    //                         </IconButton>
    //                         <div className="userdataset">
    //                             <Avatar type="file" onClick={this.handleprofile} style={{ width: "120px", height: "120px" }}>
    //                                 {this.state.profilePic !== "" ?
    //                                     <img style={{ width: "118px", height: "118px" }} src={this.state.profilePic} alt="pic">
    //                                     </img>
    //                                     :
    //                                     <b style={{ backgroundColor: "black" }}>
    //                                     </b>
    //                                 }
    //                             </Avatar> <div className="nameEmailProfile">
    //                                 <div className="firstLastName">
    //                                     <label >
    //                                         <b>
    //                                             {localStorage.getItem('firstName')}
    //                                         </b>
    //                                         <b>
    //                                             {localStorage.getItem('lastName')}
    //                                         </b>
    //                                     </label>
    //                                 </div>
    //                                 <div>
    //                                     <label>
    //                                         {localStorage.getItem('email')}
    //                                     </label>
    //                                 </div>
    //                             </div>
    //                         </div>

    //                     <div>
    //                         <Button onClick={this.handleLogout} className="signOut" style={{
    //                             marginLeft: "158px",
    //                             marginTop: " 77px",
    //                             backgroundColor: "lightgrey"
    //                         }}>Sign out</Button>
    //                     </div>
    //                     </Card>
    //                 </div>
    //             </Popper>


    //         </div >



    //     )
    // }
}

export default withRouter(ProfileImgComponenet)








// import React, { Component } from 'react'
// import Avatar from '@material-ui/core/Avatar';
// import {withRouter} from 'react-router-dom'
// import Popper from '@material-ui/core/Popper';
// import Fade from '@material-ui/core/Fade';
// import Paper from '@material-ui/core/Paper';
// import {getUser } from '../Service/UserService'
// import{Button} from '@material-ui/core'
// export class ProfilePicComponent extends Component {

//     getUserData=()=>{
//         getUser()
//             .then(async result=>
//                 {
//                     console.log("result before setstate",result);

//                    await this.setState({
//                         user:result.data
//                     })
//                     console.log("==========================",this.state.user)

//                 })
//                 .catch(err => {
//                     console.log("Erroe occur while taking all notes", err);
//                 });
//     }



//     componentDidMount(){
//       this.getUserData();
//     }

//     render() {
//         const { anchorEl, open, placement } = this.state;

//         return (
//             <div className="profile_Root">
//                  <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
//               {({ TransitionProps }) => (
//                 <Fade {...TransitionProps} timeout={350}>
//                   <Paper>
//                    <div className='img_name_email'>
//                        <div>
//                        <Avatar alt="Remy Sharp" src={this.state.user.profilePic}  className='profile_Big_Avatar'/>
//                        </div>
//                        <div>
//                        <div>
//                           {this.state.user.firstName}{this.state.user.lastName}
//                        </div>
//                        <div>

//                                {this.state.user.email}

//                        </div>
//                        </div>
//                    </div>
//                    <div>
//                    <Button
//                       onClick={this.handleSubmitSignOut}
//                       color='primary' style={{fontSize:18,fontFamily:'TimesNewRoman'}} variant="outlined">SignOut</Button>

//                    </div>
//                   </Paper>
//                 </Fade>
//               )}
//             </Popper>
//             <Avatar alt="Remy Sharp" src={this.state.user.profilePic} onClick={this.handleClick('bottom')}/>
//           </div>
//         )
//     }
// }

// export default withRouter (ProfilePicComponent)