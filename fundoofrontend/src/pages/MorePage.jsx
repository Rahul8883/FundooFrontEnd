import React, { Component } from 'react'
import MoreComponent from '../component/MoreComponent'
class morePage extends Component {
    render() {
        return (
            <div>
                <MoreComponent props={this.props}/>
            </div>
        )
    }
}

export default morePage
