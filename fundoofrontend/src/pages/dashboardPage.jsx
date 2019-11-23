import React, { Component } from 'react'
import AppBarComponent from '../component/AppBarComponent';
import CreateNotesComponent from '../component/createNotesComponent';
import GetNoteComponent from '../component/GetNoteComponent'
import { withRouter } from 'react-router-dom'
class DashboardPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: ""
        }
        this.createReff = React.createRef()
    }
    handleAddNoteRef = (value) => {
        console.log("ref value in dashboard page", value);
        this.createReff.current.displayRef(value)
    }
    handlesearch = (searchNote) => {
        this.setState({
            searchText: searchNote
        })
    }
    render() {
        return (
            <div>
                <AppBarComponent props={this.props} Searchbar={this.handlesearch} />
                <div className="mainDivCreate">
                    <CreateNotesComponent addNotesProps={this.handleAddNoteRef} />
                </div>
                <div className="getNotesMainDiv">
                    <GetNoteComponent
                        wrappedComponentRef={this.createReff}
                        props={this.props} 
                        SearchText={this.state.searchText}/>
                </div>
            </div>
        )
    }
}

export default withRouter(DashboardPage)
