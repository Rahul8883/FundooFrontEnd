import React, { Component } from 'react'
import GetNoteComponent from '../component/GetNoteComponent'
export default class getCreatedcardPage extends Component {
    render() {
        return (
            <div>
                <GetNoteComponent props={this.props}/>
            </div>
        )
    }
}
