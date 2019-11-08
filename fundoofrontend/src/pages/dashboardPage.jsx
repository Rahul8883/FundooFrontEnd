import React, { Component } from 'react'
import DrawerComponent from '../component/Dashboard'
export class dashboardPage extends Component {
    render() {
        return (
            <div>
                <DrawerComponent props={this.props} />
            </div>
        )
    }
}

export default dashboardPage
