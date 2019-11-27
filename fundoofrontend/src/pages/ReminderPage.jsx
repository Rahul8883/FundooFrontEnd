import React, { Component } from 'react'
import ReminderComponent from '../component/ReminderComponent'
export class ReminderPage extends Component {
    render() {
        return (
            <div>
                <ReminderComponent props={this.props}/>
            </div>
        )
    }
}

export default ReminderPage
