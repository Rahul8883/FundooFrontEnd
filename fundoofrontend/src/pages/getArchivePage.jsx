import React, { Component } from 'react'
import GetArchiveComponent from '../component/getArchiveComponent'
import AppBarComponent from '../component/AppBarComponent';
import { withRouter } from 'react-router-dom'
class getArchivePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            value:""
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
    handleShiftDrwer = (value) => {

        this.setState({
            value: value
        })
    }
    render() {
        return (
            <div>
            <div>
                <AppBarComponent props={this.props} Searchbar={this.handlesearch} transition={this.handleShiftDrwer} />
            </div>
            <div className="getNotesMainDiv">
               
                <div className="get_Note_comp">
                <GetArchiveComponent 
                wrappedComponentRef={this.createReff}
                SearchText={this.state.searchText}
                shiftDrawer={this.state.value}
                iconChoose={this.state.iconList}
                />
                </div>
            </div>
        </div >
        )
    }
}

export default withRouter(getArchivePage);


