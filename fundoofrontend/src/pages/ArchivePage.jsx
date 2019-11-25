import React, { Component } from 'react'
import ArchivedComponent from '../component/ArchivedComponent'
export class ArchivePage extends Component {
    render() {
        return (
            <div>
                <ArchivedComponent props={this.props}/>
            </div>
        )
    }
}

export default ArchivePage
