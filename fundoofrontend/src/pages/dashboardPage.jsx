import React, { Component } from 'react'
import AppBarComponent from '../component/AppBarComponent';
import CreateNotesComponent from '../component/createNotesComponent';
import GetNoteComponent from '../component/GetNoteComponent'
import { withRouter } from 'react-router-dom'
class DashboardPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.createReff=React.createRef()
    }
    handleAddNoteRef=(value)=>{
        console.log("ref value in dashboard page",value);
        this.createReff.current.displayRef(value)
    }
    
    render() {
        return (
            <div>
                <AppBarComponent props={this.props} />
                <CreateNotesComponent addNotesProps={this.handleAddNoteRef} />
                <div className="getNotesMainDiv">
                <GetNoteComponent
                wrappedComponentRef={this.createReff}
                props={this.props} />
                </div>
            </div>
        )
    }
}

export default withRouter(DashboardPage)
