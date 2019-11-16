import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Card, InputBase } from "@material-ui/core";
import AddAlertOutlineIcon from "@material-ui/icons/AddAlertOutlined";
import ImageIcon from "@material-ui/icons/ImageOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import { getNote, changeColor } from "../services/notesServices";
import ColorComponenet from '../component/ColorComponenet'
import ArchivedComponent from "./ArchivedComponent";
import MoreComponent from "./MoreComponent";

class GetNoteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // openNote: false,
            // title: "",
            notesId: "",
            // oldState: "",
            // search: "",
            // isDeleted: "",
            // description: "",
            color: "",
            // newNotes: {},
            // reminder: "",
            // archive: false,
            // imageUrl: [],
            // lebal: ""
            notes: []
        };
    }
    hanNoteColor = (col, notesId) => {
        let data = {
            color: col,
            noteIdList: [notesId]
        }
        console.log("response coming from color componenet", data);

        this.setState({
            color: col
        })

        changeColor(data).then((res) => {
            console.log("Response while hettinf back-end Api", res);
            this.getAllNotes();

        }).catch((err) => {
            console.log("error occur while hetting back-end", err);

        })

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
    handleRefreshArchive=()=>{
        if(true){
        this.getAllNotes()}
    }
    displayRef=(value)=>{
        console.log('====================================');
        console.log("ref value in getnote",value);
        console.log('====================================');
        this.setState({
            notes:[...this.state.notes,value]
        })
    }
    render() {
        return (
            <div className="get-container">
                {this.state.notes.map((data) => {
                    return (
                        data.isArchived===false && data.isDeleted===false&&
                        <div className="get-Whole-Card">
                            <div className="get-card-effect">
                                <Card className="get-cards1" onClick={this.handleCardClick} style={{ padding: "1em", backgroundColor: data.color }}>
                                    <div className="get-cardDetails">
                                        <InputBase value={data.title}
                                        multiline
                                        >
                                        </InputBase>
                                        <InputBase value={data.description}
                                        multiline
                                        >
                                        </InputBase>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "200px"
                                        }}
                                    >

                                        <div>
                                            <AddAlertOutlineIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <PersonAddIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <ColorComponenet
                                                className="iconEffect"
                                                propsToColorPallate={this.hanNoteColor}
                                                notesId={data.id}
                                            />
                                        </div>
                                        <div>
                                            <ImageIcon className="iconEffect" />
                                        </div>
                                        <div>
                                            <ArchivedComponent notesId={data.id}
                                            refreshArchive={this.handleRefreshArchive} className="iconEffect" />
                                        </div>
                                        <div>
                                            <MoreComponent notesId={data.id} />
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
