import React, { Component } from 'react'
import GetTrashComponent from '../component/getTrashComponent'
import AppBarComponent from '../component/AppBarComponent';
import { withRouter } from 'react-router-dom'
export class getTrashPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            value: ""
        }
        this.createReff = React.createRef()
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
                <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
                    <div className="get_Trash_Note_comp" style={{ marginTop: "95px", display:"flex", justifyContent:"center", width:"80%", flexWrap:"wrap"}}>
                        <GetTrashComponent
                            wrappedComponentRef={this.createReff}
                            shiftDrawer={this.state.value}
                            iconChoose={this.state.iconList} />
                    </div>
                </div>
            </div >
        )
    }
}
export default withRouter(getTrashPage)