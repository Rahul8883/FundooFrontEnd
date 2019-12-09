import React, { Component } from 'react'
import { Input, Tooltip } from '@material-ui/core';
import ImageIcon from "@material-ui/icons/ImageOutlined";
const url = "http://fundoonotes.incubation.bridgelabz.com/"


export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ""

        }
        // this.handleUpload=this.handleUpload.bind(this)
    }
     handleUpload(event) {

        console.log("image select", (event.target.files[0]));
        var value = url + event.target.files[0].name
         this.setState({
            imageUrl:value
    })
    console.log('props image',this.state.imageUrl)
        this.props.sendImageProps(this.state.imageUrl)
    }
    render() {
        return (
            <div>
                <div>
                    <label for="image">
                        <Tooltip title="Add Image">
                        <ImageIcon/>
                        </Tooltip>
                    </label>
                    <Input type="file"
                        id="image"

                        onChange={(event) => this.handleUpload(event)}
                        style={{ display: "none" }}>
                    </Input>
                </div>
            </div>
        )
    }
}