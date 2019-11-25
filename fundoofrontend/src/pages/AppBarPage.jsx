import React, { Component } from 'react'
import AppBarComponent from '../component/AppBarComponent'
export class AppBarPage extends Component {
    render() {
        return (
            <div>
                <AppBarComponent props={this.props}/>
            </div>
        )
    }
}

export default AppBarPage
