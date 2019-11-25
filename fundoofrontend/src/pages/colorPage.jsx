import React, { Component } from 'react'
import ColorComponenet from '../component/ColorComponenet';
export default class colorPage extends Component {
    render() {
        return (
            <div>
                <ColorComponenet props={this.props}/>
            </div>
        )
    }
}
