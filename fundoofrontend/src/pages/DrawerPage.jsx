import React, { Component } from 'react'
import Drawer from '../component/DrawerComponent';
export class DrawerPage extends Component {
    render() {
        return (
            <div>
                <Drawer props={this.props}/>
            </div>
        )
    }
}

export default DrawerPage
