import React, { Component } from 'react'
import ArchivedComponent from '../component/ArchivedComponent'
export default class ArchivePage extends Component {
    render() {
        return (
            <div>
                <ArchivedComponent props={this.props}/>
            </div>
        )
    }
}
