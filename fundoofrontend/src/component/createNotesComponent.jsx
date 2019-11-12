import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Button } from '@material-ui/core'
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlined';
import AddAlertOutlineIcon from '@material-ui/icons/AddAlertOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import InputBase from '@material-ui/core/InputBase';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import PaletteIcon from '@material-ui/icons/PaletteOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
class CreateNotesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    handleToggle = () => {
        console.log("kjdshfjhsdfhdhs", this.state.open);
        this.setState({
            open: true
        })
    }
    render() {
        return (
            !this.state.open ?
                <div className="createNote_container" onClick={this.handleToggle}>
                    <Card className="CreateNote_Card" >
                        <div classname="createNote_input_base">
                            <InputBase
                                className="CreateNote_TextField"
                                placeholder="Take a note..."
                                multiline
                                spellCheck={true}
                            // onClick={this.handleNotes}
                            />
                        </div>
                        <div className="first_Card_icons" style={{display:"flex"}}>
                            <div>
                                <CheckBoxOutlineIcon />
                            </div>
                            <div>
                                <EditIcon />
                            </div>
                            <div>
                                <ImageIcon />
                            </div>
                        </div>
                    </Card>
                </div>
                :
                <div>
                    <Card className="CreateNote_Card" >
                        <div>
                            <div>
                                <InputBase
                                    className="CreateNote_TextField"
                                    placeholder="Title"
                                    multiline
                                    spellCheck={true}
                                />
                            </div>
                            <div>
                                <InputBase
                                    className="CreateNote_TextField"
                                    placeholder="take a note...."
                                    multiline
                                    spellCheck={true}
                                />
                            </div>

                            <div>
                                <div>
                                    <AddAlertOutlineIcon />
                                </div>
                                <div>
                                   <PersonAddIcon/>
                                </div>
                                <div>
                                  <PaletteIcon/>
                                </div>
                                <div>
                                    <ImageIcon/>
                                </div>
                                <div>
                                   <ArchiveIcon/>
                                </div>
                                <div>
                                   <MoreVertIcon/>
                                </div>
                                <div>
                                   <UndoIcon/>
                                </div>
                                <div>
                                   <RedoIcon/>
                                </div>
                                <div>
                                    <Button
                                        style={{ margin: "spacing.unit" }}>Close
                            </Button>
                                </div>

                            </div>
                        </div>
                    </Card>

                </div>
        )
    }
}
export default withRouter(CreateNotesComponent)
