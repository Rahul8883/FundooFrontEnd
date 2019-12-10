import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"
import { Card } from '@material-ui/core';
import AppBarComponent from '../component/AppBarComponent'
import { height } from '@material-ui/system';
import { getSelectNotes } from '../services/questionAnswer';
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
      notes :[]
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



  // handleAskQuestion= () => {
   
  // }
  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  handleSelectNotes = () => {
    this.props.history.push('/dashboard')
  }
  render() {

    const { editorState } = this.state;
    return (<div className='editor_Main_Div'>
      <div>
        <AppBarComponent />
      </div>
      <div>
        <Card className="Editor_Card" style={{ height: "100vh" }}>


          <div className="Container" style={{ marginTop: "6%" }}>
            <div style={{ display: "flex", justifyContent: "center", width: "397px" }}>
              <div className="Tit_Des_Main">
                <div>
                  <div>Title</div>
                  <div>Description</div>
                </div>
                <div onClick={this.handleSelectNotes}>Close</div>

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
                  editorState={editorState}
                  onEditorStateChange={this.onEditorStateChange}
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
            <div className="ask">ASK ?</div>
          </div>
        </Card>
      </div>
    </div>
    )
  }
}
export default QuesAnsComponent
