import React, { Component } from 'react'
import DrawerComponent from '../component/DrawerComponent'
export class Drawer extends Component {
    render() {
        return (
            <div>
                <DrawerComponent props={this.props}/>
             </div>
        )
    }
}

export default Drawer
