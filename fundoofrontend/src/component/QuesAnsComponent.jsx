import React, { Component } from 'react';
import { render } from 'react-dom';
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg"
import { Card } from '@material-ui/core';
import AppBarComponent from '../component/AppBarComponent'
import { height } from '@material-ui/system';


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
      noteId :""
    };
  }

  onEditorStateChange = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  handleSelectNotes=()=>{
    // var data={
    //   noteId: 
    // }
  }
  render() {

    const { editorState } = this.state;
    return (<div className='editor_Main_Div'>
     <div>
        <AppBarComponent />
     </div>
      <div>
      <Card className="Editor_Card" style={{height:"100vh"}}>


         <div className="Container" style={{marginTop:"6%"}}>
         <div style={{display:"flex", justifyContent:"center",    width: "397px"}}>
          <div className="Tit_Des_Main">
          <div>
            <div>Title</div>
            <div>Description</div>
          </div>
          <div onClick={this.handleSelectNotes}>Close</div>

        </div>
        </div>
        <div className="Ask_Que">Ask a Question...?</div>

        <div className="Editor_Comp" style={{display:"flex", justifyContent:"center"}}>
          <Card className="Editor_Card" style={{
            width: "63em",
            height: "57vh"
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
