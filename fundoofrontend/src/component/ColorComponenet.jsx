import React, { Component } from 'react'
import { IconButton, Tooltip, } from '@material-ui/core';
import { Popper, Paper, ClickAwayListener } from '@material-ui/core';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
const hexdaDecimalCodeWithName = [
    { name: "Gray", color: "#808080" },
    { color: "#d7aefb" },
    { color: "#fdcfe8" },
    { color: "#e6c9a8" },
    { color: "#e8eaed" },
    { color: "#ccff90" },
    { color: "#a7ffeb" },
    { color: "#cbf0f8" },
    { color: "#aecbfa" },
    { color: "#f28b82" },
    { color: "#fbbc04" },
    { color: "#fff475" },
    { name: "Red", color: "#ef9a9a" },
{ name: "Cyan", color: "#80deea" },
{ name: "Blue", color: "#2196f3" },
{ name: "Indigo", color: "#9fa8da" },
{ name: "LightBlue", color: "#90caf9" },
{ name: "Purple", color: "#b39ddb" },
{ name: "Yellow", color: "#c5e1a5" },
{ name: "Lime", color: "#e6ee9c" },
{ name: "Pink", color: "#f48fb1" },
{ name: "gray", color: "#eeeeee" },
{ name: "Brown", color: "#bcaaa4" },
{color: "#bcdaa6"},
]
export default class ColorComponenet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorEl: null,
        }
    }
    closePopper = () => {
        this.setState({
            open: false
        })
    }
    OpenPopper = () => {
        this.setState({
            open: true
        })
    }
    handleListener = () => {
        this.setState({
            open: false
        })
    }
    handleColor = (event) => {
        try {
            this.props.propsToColorPallate(event.target.value, this.props.notesId)
        } catch (err) {
            console.log("Error occur while heatting back-end", err);
        }
    }
    // handleToggle = (evt) => {
    //     this.setState({ open: !this.state.open })
    // }

    handleToggle = (e) => {
         console.log("notes id is ", this.props.notesId);

        this.setState({
            anchorEl: this.state.anchorEl ? false : e.target,
            open: true,
             colorNotesId: this.props.notesId
        });
    }
    render() {
        const changeColor = hexdaDecimalCodeWithName.map((colorkey) =>
            <Tooltip title={colorkey.name} className="colorTooltip" style={{ zIndex: "9999" }}>
                <ClickAwayListener onClickAway={this.handleListener}>
                    <IconButton style={{ backgroundColor: colorkey.color, "margin": "2px", zIndex: "9999" }}
                        value={colorkey.color}
                        onClick={this.handleColor}
                        className="colorpallete"
                    >
                    </IconButton>
                </ClickAwayListener>
            </Tooltip>
        );
        return (
           
                <PopupState variant="popper" >
                    {popupState => (
                        <div>
                            <div variant="contained" {...bindToggle(popupState)}>
                                <img src={require('../assets/image/changeColor.svg')}
                                    alt="change color"
                                    onClick={this.handleToggle}
                                />
                            </div>
                            <Popper  {...bindPopper(popupState)} transition className="colorPopper" style={{ zIndex: "9999" }}>
                                {this.state.open ?
                                    <Paper
                                        className="colorPalleteCard" style={{width:"25%", padding:"7px"}}
                                    >
                                        {changeColor}
                                    </Paper>
                                    : null}
                            </Popper>
                        </div>
                    )}
                </PopupState>
          

        )
    }
}
