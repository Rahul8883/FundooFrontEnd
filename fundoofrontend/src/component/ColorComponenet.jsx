import React, { Component } from 'react'
import { IconButton, Tooltip, } from '@material-ui/core';
import { Popper, Paper, ClickAwayListener } from '@material-ui/core';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
// const thm = createMuiTheme({
//     overrides: {
//         Muipaper: {
//             root: {
//                 MuiPaper: {
//                     elevation1: {
//                         colorPalleteCard: {
//                             MuiPaper: {
//                                 rounded: {
//                                     width: "112px",
//                                     justifycontent: "center",
//                                     opacity: "0.91",
//                                     boxshadow: "0 1px 4px rgba(0,0,0,0.2)",
//                                     padding: "5px 7px 3px",
//                                     zindex: "4011",
//                                     position: "absolute"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// });
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
    { color: "#fff" },
    { color: "#f28b82" },
    { color: "#fbbc04" },
    { color: "#fff475" }
]
export default class ColorComponenet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
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
    handleToggle = (evt) => {
        this.setState({ open: !this.state.open })
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
                                        className="colorPalleteCard" style={{width:"32%"}}
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
