import React, { Component } from 'react'
import ProfileImgComponenet from '../component/ProfileImgComponenet'
export class profileImgPage extends Component {
    render() {
        return (
            <div>
                <ProfileImgComponenet props={this.props}/>
            </div>
        )
    }
}
export default profileImgPage
