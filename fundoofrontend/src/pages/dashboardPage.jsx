import React, { Component } from 'react'
import AppBarComponent from '../component/AppBarComponent';
import CreateNotesComponent from '../component/createNotesComponent';
import GetNoteComponent from '../component/GetNoteComponent'
import { withRouter } from 'react-router-dom'
class DashboardPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchText: "",
            value:"",
            iconList:""
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
    handleIconSelect=(iconList)=>{
        this.setState({
            iconList:iconList    
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
                    <AppBarComponent props={this.props} Searchbar={this.handlesearch} transition={this.handleShiftDrwer}
                    iconSelect={this.handleIconSelect}
                    />
                </div>
                <div className="getNotesMainDiv">
                    <div className="mainDivCreate">
                        <CreateNotesComponent addNotesProps={this.handleAddNoteRef}
                        
                        />
                    </div>
                    <div className="get_Note_comp">

                        <GetNoteComponent
                            // transition={this.props.transition ? transition-left:transition-right } 
                            wrappedComponentRef={this.createReff}
                            props={this.props}
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

export default withRouter(DashboardPage)
