import React, { Component } from 'react'
// import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"
import { Button, Card } from '@material-ui/core';
import { getQuestionAnswer, } from '../services/questionAnswer';
import { getNote } from '../services/notesServices';
import { withRouter } from 'react-router-dom';
import AppBarComponent from '../component/AppBarComponent'

function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        }
    );
}

class EditorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            open: false,
            queAns: [],
            messages: [],
            note: [],
        }
    }
    componentDidMount() {
        this.getNote()

    }
    getNote = () => {
        getNote()
            .then(result => {
                this.setState({
                    note: result.data.data.data,
                })
                console.log(" all note data==>", this.state.note);
            },
                error => {
                    console.log(error);
                });
    }
    handleOpen = () => {
        this.setState({ open: !this.state.open })
    }
    handleClose = () => {
        this.setState({ open: false })
    }
    onEditorStateChange = (e) => {
        let question = e.blocks[0].text;
        this.setState({
            body: question
        })
        console.log("editor value in input base ", this.state.body);
    };

    HandleQueAns = (data) => {
        var data1 = {
            'message': this.state.body,
            'notesId': data
        }
        console.log("data from backend", data);
        getQuestionAnswer(data1)
            .then(response => {
                console.log("response from ques ans", response);
                this.setState({
                    messages: response.data.data.details.message,
                })
                this.getNote()
                console.log("my id...", this.state.messages);
            })
            .catch(err => {
                console.log("Error While posting que and ans", err);
            })
    }
    RedirectToHome = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        console.log("location of notes", this.props.location.state);
        var allMessages = this.state.note.map((key) => {
            console.log("QQQQQQQQQQQQQQQQQQQQ===========>",  this.props.askId, key.id)
            return (
                <div >
                    {(this.props.location.state === key.id) ?
                        <Card className="QueAns_Main">
                            <div>
                                <AppBarComponent />
                            </div>
                            <div className="Ansque">
                                <div>
                                    {(key.questionAndAnswerNotes.length > 0) &&
                                        <div className="que-display" >
                                            <div><b className="quehead">
                                                Questions
                                </b>
                                            </div>
                                            <div className="question" >
                                                <div>{key.title}</div>
                                                <div>{key.description}</div>
                                                <div
                                                    dangerouslySetInnerHTML={{ __html: key.questionAndAnswerNotes[key.questionAndAnswerNotes.length - 1].message.toString() }} >
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <div>
                                    <Button onClick={this.RedirectToHome} className="buttonEditorClose">
                                        <b>Close</b>
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <div className="Ask_Que">Ask a Question...?</div>
                            </div>
                            <div className="Container"  >
                                <div className="Editor_Comp" style={{ display: "flex", justifyContent: "center" }}>
                                    <Card className="Editor_Card" style={{
                                        width: "63em",
                                        height: "51vh",
                                        boxShadow: "0px 1px 7px 1px"
                                    }}>
                                        <Editor
                                            onChange={(event) => this.onEditorStateChange(event)}
                                            toolbar={{
                                                inline: { inDropdown: true },
                                                list: { inDropdown: true },
                                                textAlign: { inDropdown: true },
                                                link: { inDropdown: true },
                                                history: { inDropdown: true },
                                                image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
                                            }}
                                        />
                                    </Card>
                                </div>
                            </div>
                            <div>
                                <div onClick={() => this.HandleQueAns(this.props.location.state)} className="Ask"> Ask ? </div>
                            </div>
                        </Card>
                        :
                        null
                    }
                </div>
            )
        })
        return (
            <div>
                {allMessages}
            </div>
        )
    }
}
export default withRouter(EditorComponent);















// ---------------------------------------------------------------------------------------------------------


// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg"
// import { Card } from '@material-ui/core';
// import AppBarComponent from '../component/AppBarComponent'
// import { height } from '@material-ui/system';
// import { getSelectNotes, getQuestionAnswer, getReply } from '../services/questionAnswer';
// import { getNote } from '../services/notesServices';
// import ReplyIcon from '@material-ui/icons/Reply';
// import Avatar from '@material-ui/core/Avatar';

// function uploadImageCallBack(file) {
//   return new Promise(
//     (resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', 'https://api.imgur.com/3/image');
//       xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
//       const data = new FormData();
//       data.append('image', file);
//       xhr.send(data);
//       xhr.addEventListener('load', () => {
//         const response = JSON.parse(xhr.responseText);
//         resolve(response);
//       });
//       xhr.addEventListener('error', () => {
//         const error = JSON.parse(xhr.responseText);
//         reject(error);
//       });
//     }
//   );
// }


// class QuesAnsComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//       noteId: "",
//       notes: [],
//       readArrDetail: [],
//       messg: [],
//       body: "",
//       noteId: "",
//       questionAns: "",
//       open: false,
//       profilePic: localStorage.getItem('imageUrl'),
//       reply: false,
//       quesId: "",
//       replyAns: "",
//       noteIdQues: ""
//     };
//   }
//   componentDidMount() {
//     this.getAllNotes();
//   }
//   getAllNotes = () => {
//     getNote()
//       .then(result => {
//         this.setState({
//           notes: result.data.data.data
//         });
//         console.log("all notes data ", this.state.notes);
//       })
//       .catch(err => {
//         console.log("Erroe occur while taking all notes", err);
//       });
//   }
//   handleNoteDetails = () => {
//     var data = {
//       noteId: this.props.noteId
//     }

//     getSelectNotes(data).then((res) => {
//       console.log("response comming from getSelect note Api", res);
//     }).catch((err) => {
//       console.log("Error occur while hitting getSelected note back-end Api", err);
//     })
//   }
//   handleChangeEditorBody = (e) => {
//     const Body = e.target.value
//     this.setState({
//       Body: Body
//     })
//     console.log("input Base", this.state.body);
//   }
//   submitQuestion = (data) => {
//     var data = {
//       message: this.state.body,
//       notesId: data
//     }
//     console.log("data occur while htiing back-end ask question Api", data);
//     getQuestionAnswer(data).then(res => {
//       console.log("response comming from que ans component ", res);
//       this.setState({
//         questionAns: res.data.data.details.message,
//         quesId: res.data.data.details.id,
//         open: true,
//         noteIdQues: res.data.data.details.notesId
//       })
//       console.log("response========>", this.state.questionAns);
//     }).catch(err => {
//       console.log('err occur while htiing back-end ask question Api', err);
//     })
//   }
//   onEditorStateChange = (e) => {
//     let question = e.blocks[0].text;
//     this.setState({
//       body: question
//     })
//     console.log("editor value in input base ", this.state.body);
//   };
//   handleSelectNotes = () => {
//     var data = {
//       data1: this.state.questionAns,
//       data2: this.state.noteIdQues
//     }
//     this.props.history.push('/dashboard', data)
//   }
//   handlereply = () => {
//     this.setState({
//       reply: true
//     })
//   }

//   submitReply = () => {
//     var data = {
//       // parentId : this.state.quesId,
//       message: this.state.body
//     }
//     console.log("data occur while htiing back-end ask question Api", data);
//     getReply(data, this.state.quesId).then(res => {
//       console.log("response comming from que ans component ", res);
//       this.setState({
//         replyAns: res.data.data.details.message,
//         reply: false

//       })
//       // console.log("response========>", this.state.questionAns);
//     }).catch(err => {
//       console.log('err occur while htiing back-end ask question Api', err);
//     })
//   }
//   render() {
//     var title = "", description = "", noteId = ""
//     this.state.readArrDetail = this.props.location.state
//     if (this.props.location.state !== undefined) {
//       title = this.props.location.state.title
//       description = this.props.location.state.description
//       noteId = this.props.location.state.id
//     }
//     const { editorState } = this.state;
//     return (<div className='editor_Main_Div'>
//       <div>
//         <AppBarComponent />
//       </div>
//       <div>
//         <Card className="Editor_Card" style={{
//           overflowY: "scroll",
//           background: "linear-gradient(-45deg, #e63f0b, #ff082a, #23a6d5bd)",
//           position: "relative",
//           animation: "change 10s ease-in-out infinite",
//           backgroundSize: "400% 400%",
//           height: "100vh"

//         }}>
//           <div className="readTit_Des" style={{ marginTop: "8%" }} >
//             <div>
//               <div className="Title_Asked">Selected Note </div>
//               <div>{title}</div>
//               <div>{description}</div>
//             </div>
//             <div className="close"
//               onClick={this.handleSelectNotes}> Close
//           </div>
//           </div>
//           {!this.state.open ? (
//             <div className="Container" style={{ height: "100vh" }} >
//               <div className="Ask_Que">Ask a Question...?</div>
//               <div className="Editor_Comp" style={{ display: "flex", justifyContent: "center" }}>
//                 <Card className="Editor_Card" style={{
//                   width: "63em",
//                   height: "51vh",
//                   boxShadow: "0px 1px 7px 1px"
//                 }}>
//                   <Editor
//                     onChange={(event) => this.onEditorStateChange(event)}
//                     toolbar={{
//                       inline: { inDropdown: true },
//                       list: { inDropdown: true },
//                       textAlign: { inDropdown: true },
//                       link: { inDropdown: true },
//                       history: { inDropdown: true },
//                       image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
//                     }}
//                   />
//                 </Card>
//               </div>
//               <div onClick={() => this.submitQuestion(noteId)} className="ask"
//               >ASK ?</div>
//             </div>
//           ) : (
//               <div className="askedQue">
//                 <div className="Title_Asked">Asked Question </div>
//                 <div>
//                   <Avatar alt="Remy Sharp" ><img src={this.state.profilePic} /></Avatar>
//                 </div>
//                 <div> Question :- {this.state.questionAns}</div>
//                 <div> Answer :-{this.state.replyAns}</div>
//                 <div style={{ display: "flex", justifyContent: "flex-end" }} onClick={this.handlereply}><ReplyIcon /></div>
//                 {this.state.reply ? (
//                   <div>
//                     <div className="Container" >
//                       <div className="Ask_Que">Ask a Question...?</div>
//                       <div className="Editor_Comp" style={{ display: "flex", justifyContent: "center" }}>
//                         <Card className="Editor_Card" style={{
//                           width: "63em",
//                           height: "51vh",
//                           boxShadow: "0px 1px 7px 1px"
//                         }}>
//                           <Editor
//                             onChange={(event) => this.onEditorStateChange(event)}
//                             toolbar={{
//                               inline: { inDropdown: true },
//                               list: { inDropdown: true },
//                               textAlign: { inDropdown: true },
//                               link: { inDropdown: true },
//                               history: { inDropdown: true },
//                               image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
//                             }}
//                           />
//                         </Card>
//                       </div>
//                       <div onClick={this.submitReply} className="ask"
//                       >Reply</div>
//                     </div>
//                   </div>
//                 ) : null}
//               </div>
//             )
//           }
//         </Card>
//       </div>
//     </div>
//     )
//   }
// }
// export default QuesAnsComponent
