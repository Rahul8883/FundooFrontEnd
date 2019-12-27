import { Button, Card, CardContent, Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { likeQueAns } from '../services/questionAnswer';
import { getNote } from '../services/notesServices';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import UndoIcon from '@material-ui/icons/Undo';
const url = "http://34.213.106.173/"

class queDisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            noteId: "",
            like: true,
            parentId: "",
            likecnt: ""
        }
    }
    componentDidMount = () => {

        getNote().then(response => {
            console.log("Response From Que Page", response);
            this.setState({
                note: response.data.data.data
            })
            console.log("note in que display component", this.state.note);
        })
            .catch(err => {
                console.log("ERR_IN_QUESTION", err);
            })
    }
    RedirectToHome = (e) => {
        e.preventDefault()
        this.props.history.push('/dashboard')
    }
    handleEditor = (noteId) => {
        this.props.history.push('/ask', noteId)
      
    }
    handleLike = (parentId) => {
        var data = {
            'like': true,
        }
        console.log("like check", this.state.like);
        likeQueAns(data, parentId)
            .then(response => {
                console.log("REPONSE_FROM_LIKE_QUE_ANS", response);
                this.setState({
                    like: !this.state.like,
                })
            })
            .catch(err => {
                console.log("ERR_IN_LIKE_QUE_ANS", err);
            })
    }
    handleUnlike = (parentId) => {
        var data = {
            'like': false,
        }
        console.log("like check", this.state.like);
        likeQueAns(data, parentId)
            .then(response => {
                console.log("REPONSE_FROM_LIKE_QUE_ANS", response);
                this.setState({
                    like: !this.state.like
                })
            })
            .catch(err => {
                console.log("ERR_IN_LIKE_QUE_ANS", err);
            })
    }
    countLike(value) {
        var countlike = 0
        if (value === true) {
            countlike++
        }
        console.log("checking...", countlike);
        return countlike;
    }
    render() {
        var notearr = this.state.note.map((key) => {
            return (
                <div className="mainDiv">
                    {(this.props.location.state === key.id) ?
                        <div>
                                <Card >
                                    <CardContent className="FirstQueDiv">
                                        <div className="queTitleDesc">
                                            <div>
                                                {"Title : " + key.title}
                                            </div>
                                            <div>
                                                {"Description : " + key.description}
                                            </div>
                                        </div>
                                            <Button onClick={this.RedirectToHome} className="QuecloseButton ">
                                                <b>Close</b>
                                            </Button>
                                    </CardContent>
                                    {
                                        <div style={{ display: "flex", flexDirection: "column-reverse" }} className="QuesDisplay">
                                            {(key.questionAndAnswerNotes.length > 0) &&
                                                <div className="que-display" >
                                                    <div><b className="quehead">
                                                        Asked Question
                                </b>
                                                    </div>
                                                    <br></br>
                                                    <div className="que"
                                                        dangerouslySetInnerHTML={{ __html: key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].message.toString()}}>
                                                    </div>
                                                </div>}
                                        </div>
                                    }
                                </Card>
                          
                                {(key.questionAndAnswerNotes.length > 0) &&
                                    <Card className="secondCard">
                                        <div className="secondCardDiv">
                                            <Avatar style={{
                                                width: "60px", height: "60px"
                                            }} >
                                                <img style={{
                                                    width: "60px", height: "60px"
                                                }}
                                                    src={url + (localStorage.getItem("ProfilePic"))} alt="profile Pic">
                                                </img>
                                            </Avatar>
                                            <div className="alldata">
                                                <div className="mydataQue">
                                                    <div className="lastfirstname">
                                                        <b>{localStorage.getItem('firstName')}</b>
                                                        <b className="lastname">{localStorage.getItem('lastName')}</b>
                                                    </div>
                                                    <date style={{ "margin-left": "4%" }}> {key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].createdDate}</date>
                                                </div>
                                                <br></br>
                                                <div className="ques"
                                                    dangerouslySetInnerHTML={{ __html: key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].message.toString().substring(3).slice(0, -4) }}>
                                                </div>
                                            </div>
                                            <div className="likeDisp">
                                                <div onClick={() => this.handleEditor(key.id)} className="back_Arrow">
                                                   <UndoIcon/>
                                                </div>
                                                {this.state.like ?
                                                    <div onClick={() => this.handleLike(key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].id)}>
                                                       <ThumbUpAltIcon/>
                                                    </div>
                                                    :
                                                    <div onClick={() => this.handleUnlike(key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].id)}>
                                                        <ThumbDownIcon/>
                                                        
                                                    </div>}
                                            </div>
                                            <span className="likeprint" onClick={this.countLike} > {key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].like.length} Likes</span>

                                        </div>
                                    </Card>
                                }
                           
                        </div> :
                        null
                    }
                </div>
            )
        })
        return (
            <div className="AllQue">
                {notearr}
            </div>
        )
    }
}
export default withRouter(queDisplayComponent)
