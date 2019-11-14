import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card } from "@material-ui/core";
import AddAlertOutlineIcon from "@material-ui/icons/AddAlertOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import PaletteIcon from "@material-ui/icons/PaletteOutlined";
import ArchiveIcon from "@material-ui/icons/ArchiveOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import { getNote } from "../services/notesServices";

class GetNoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // openNote: false,
            // title: "",
            // noteId: "",
            // oldState: "",
            // search: "",
            // isDeleted: "",
            // description: "",
            // color: "",
            // newNotes: {},
            // reminder: "",
            // archive: false,
            // imageUrl: [],
            // lebal: ""
            notes: []
        };
    }
    componentDidMount() {
        this.getAllNotes();
    }
    getAllNotes = () => {
        getNote()
            .then(result => {
                this.setState({
                    notes: result.data.data.data
                });
                console.log("all notes data ", this.state.notes);
            })
            .catch(err => {
                console.log("Erroe occur while taking all notes", err);
            });
    }
    handleCardClick = () => {
        console.log("triggered");

    }
    render() {
        return (
            <div className="get-container">
                {this.state.notes.map((data) => {
                    return (



                        <div className="get-Whole-Card">
                            <div className="get-card-effect">
                                <Card className="get-cards1" onClick={this.handleCardClick} style={{ padding: "1em" }}>
                                    <div className="get-cardDetails">
                                        <div>{data.title}</div>
                                        <div>{data.description}</div>
                                    </div>


                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "129%"
                                        }}
                                    >

                                        <div>
                                            <AddAlertOutlineIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <PersonAddIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <PaletteIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <ImageIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <ArchiveIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <MoreVertIcon className="iconEffect" />
                                        </div>
                                    </div>

                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>

        );
    }
}
export default withRouter(GetNoteComponent);
