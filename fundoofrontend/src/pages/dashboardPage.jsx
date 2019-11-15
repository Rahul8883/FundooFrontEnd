import React, { Component } from 'react'
import AppBarComponent from '../component/AppBarComponent';
import CreateNotesComponent from '../component/createNotesComponent';
import GetNoteComponent from '../component/GetNoteComponent'
class dashboardPage extends Component {
    render() {
        return (
            <div>
                <AppBarComponent props={this.props} />
                <CreateNotesComponent props={this.props} />
                <div className="getNotesMainDiv">
                <GetNoteComponent props={this.props} />
                </div>
            </div>
        )
    }
}

export default dashboardPage
