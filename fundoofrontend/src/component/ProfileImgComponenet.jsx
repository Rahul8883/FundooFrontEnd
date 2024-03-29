import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Paper, Popper, Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { profilePicUpload } from '../services/userProfile';
import Fade from '@material-ui/core/Fade';
const url = "http://fundoonotes.incubation.bridgelabz.com/"
export class ProfileImgComponenet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
            placement: null,
            profilePic: localStorage.getItem('imageUrl'),
            openAvtar: false
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
        // if (localStorage.getItem("profilePic") !== undefined) {
        //     this.setState({
        //         profilePic: localStorage.getItem("profilePic")
        //     })
        // }
    }
    handleProfile = async (event) => {
        console.log("Handle_Profilre_Pic", event.target.files[0]);
        let imageData = event.target.files[0]
        const formData = new FormData()
        formData.append('file', imageData)
        await profilePicUpload(formData).then((res) => {
            console.log("--------------------", this.state.res);
            console.log("res coming while hitting back-end Api", res.data.status.imageUrl);
            this.setState({
                profilePic: url + res.data.status.imageUrl,
                openAvtar:false
            })
            localStorage.setItem("imageUrl",this.state.profilePic);
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
    handleSubmitSignOut = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }


    handleAvtarOpen=()=>{
        this.setState({
            openAvtar:true
        })
    }
    render() {
        const { anchorEl, open, placement } = this.state;

        return (
            <div className="profile_Root" >
                <Popper open={open} anchorEl={anchorEl} placement={placement} transition  style={{marginTop :"16px" , zIndex:"999", marginLeft: "16px"}}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350} >
                            <Paper  style={{height:"35vh", width:"12em", padding:"5px"}}>
                                <div className='img_name_email'>
                                    {!this.state.openAvtar ?(
                                            <div onClick={this.handleAvtarOpen} className="profileUpload">
                                                <Avatar alt="Remy Sharp" src={   this.state.profilePic} />
                                            </div>
                                        ) : (
                                            <div>
                                                <input type='file' alt="Remy Sharp" onChange={(event) => this.handleProfile(event)} src={this.state.profilePic} className='profile_Big_Avatar' />
                                            </div>
                                        )
                                    }

                                    <div>
                                        <div className="colabName">
                                            <div  className="colabfirstName"> <b>{localStorage.getItem('firstName')}</b></div>
                                            <div style={{ borderBottom: "1px solid #ddd"}}  className="colablastName"><b>{localStorage.getItem('lastName')}</b> <b style={{ fontStyle: "italic" }}> ( Owner ) </b> </div>
                                        </div>
                                        <div className="colabEmail" >
                                            {localStorage.getItem('email')}
                                        </div>
                                    </div>
                                </div>
                                <div className="profilebutton">
                                    <Button
                                        onClick={this.handleSubmitSignOut}
                                        color='primary' style={{ fontSize: 10, fontFamily: 'TimesNewRoman' }} variant="outlined">SignOut</Button>
                                </div>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <Avatar alt="Remy Sharp" src={   this.state.profilePic} onClick={this.handleClick('bottom')} />
            </div>
        )
    }
}
export default withRouter(ProfileImgComponenet)