import React, { Component } from 'react'
import CreateNotesComponent from '../component/createNotesComponent';

export default class CreateNotesPage extends Component {
    render() {
        return (
            <div>
               <CreateNotesComponent props ={this.props} /> 
            </div>
        )
    }
}
