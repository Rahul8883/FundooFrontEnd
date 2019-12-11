import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"
import { Card } from '@material-ui/core';
import AppBarComponent from '../component/AppBarComponent'
import { height } from '@material-ui/system';
import { getSelectNotes, getQuestionAnswer } from '../services/questionAnswer';
import { getNote } from '../services/notesServices';


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


class QuesAnsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      noteId: "",
      notes: [],
      readArrDetail: [],
      messg: [],
      body: "",
      noteId :""
    };
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
  handleNoteDetails = () => {
    var data = {
      noteId: this.props.noteId
    }

    getSelectNotes(data).then((res) => {
      console.log("response comming from getSelect note Api", res);

    }).catch((err) => {
      console.log("Error occur while hitting getSelected note back-end Api", err);

    })

  }
  handleChangeEditorBody = (e) => {
    const Body = e.target.value
    this.setState({
      Body: Body
    })
    console.log("input Base", this.state.body);
  }
  submitQuestion = (data) => {

    var data = {
      messg: this.state.body,
      noteId: data
    }
    console.log("data occur while htiing back-end ask question Api", data);
    getQuestionAnswer(data).then(res => {
      console.log("response comming from que ans component ", res);
    }).catch(err => {
      console.log('err occur while htiing back-end ask question Api', err);
    })
  }
  onEditorStateChange = (e) => {
    let question = e.blocks[0].text;
    this.setState({
      body: question
    })
    console.log("editor value in input base ", this.state.body);
  };

  handleSelectNotes = () => {
    this.props.history.push('/dashboard')
  }
  render() {
    var title = "", description = "", noteId= ""
    this.state.readArrDetail = this.props.location.state
    if (this.props.location.state !== undefined) {
      title = this.props.location.state.title
      description = this.props.location.state.description
      noteId=this.props.location.state.id
    }

    const { editorState } = this.state;
    return (<div className='editor_Main_Div'>

      <div>
        <AppBarComponent />
      </div>

      <div>
        <Card className="Editor_Card" style={{ height: "100vh" }}>


          <div className="Container" style={{ marginTop: "6%" }}>
            <div className="readTit_Des">

              <div>
                <div>{title}</div>
                <div>{description}</div>
              </div>

              <div className="close"
                onClick={this.handleSelectNotes}> Close
                </div>

            </div>
            <div className="Ask_Que">Ask a Question...?</div>

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
            <div onClick={()=>this.submitQuestion(noteId)} className="ask">ASK ?</div>
          </div>
        </Card>
      </div>


    </div>
    )
  }
}
export default QuesAnsComponent
