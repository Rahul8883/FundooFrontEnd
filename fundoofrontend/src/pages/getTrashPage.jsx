import React, { Component } from 'react'
import GetTrashComponent from '../component/getTrashComponent'
import AppBarComponent from '../component/AppBarComponent';
import CreateNotesComponent from '../component/createNotesComponent';
import { withRouter } from 'react-router-dom'
export class getTrashPage extends Component {
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
            <div style={{ backgroundColor: "#e8e8e8" }}>
            <div>
                <AppBarComponent props={this.props} Searchbar={this.handlesearch} transition={this.handleShiftDrwer} />
            </div>
            <div className="getNotesMainDiv">
                <div className="mainDivCreate">
                    <CreateNotesComponent addNotesProps={this.handleAddNoteRef}
                    />
                </div>
                <div className="get_Note_comp">
                <GetTrashComponent 
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

export default withRouter(getTrashPage)