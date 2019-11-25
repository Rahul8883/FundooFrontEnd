import React, { Component } from 'react'
import MoreComponent from '../component/MoreComponent'
 class MorePage extends Component {
    render() {
        return (
            <div>
                <MoreComponent props={this.props}/>
            </div>
        )
    }
}
export default MorePage