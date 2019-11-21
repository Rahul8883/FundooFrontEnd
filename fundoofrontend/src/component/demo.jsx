<div className="DrawerAllIcon">                           
                          <div>
                                 <MenuItem id="DrawerSubIcon">
        <EmojiObjectsOutlineIcon
                                    />
                                    <div
                                    //      style={{color:"inherit",
                                    //     letterspacing: ".01785714em",
                                    //     fontfamily: "Google Sans,Roboto,Arial,sansserif",
                                    //     fontsize: ".875rem",
                                    //     fontweight: "500",

                                    // }}

                                    >Notes</div>
                                </MenuItem>
                            </div>
                            <div>
                                <MenuItem id="DrawerSubIcon">
                                    <AddAlertOutlineIcon />
                                    <b>Remender</b>
                                </MenuItem>
                            </div>
                            <div style={{ borderBottom: "1px solid lightgrey", borderTop: "1px solid lightgrey" }}>
                                <div style={{  fontSize: "13px", marginBottom: "10px", marginTop: "10px", fontFamily: "arial" }}>
                                    <b>LABELS</b>
                                    {/* <div style={{ overflowY: "auto", maxHeight: "500px", borderRadius: "0px 25px 25px 0px" }}>
                                        labelArr
                                    </div> */}
                                    {/* <Editlabel></Editlabel> */}
                                    <div>
                                        <MenuItem id="DrawerSubIcon">
                                            <EditOutlineIcon/>
                                            <b>Edit Labels</b>
                                        </MenuItem>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <MenuItem id="DrawerSubIcon">

                                    <ArchiveOutlineIcon />
                                    <b>Archive</b>
                                </MenuItem>
                            </div>
                            <div>
                                <MenuItem id="DrawerSubIcon">
                                    <DeleteOutlineIcon />
                                    <b>Trash</b>
                                </MenuItem>
                            </div>
                            </div>
















//label maping





                            // renderAllLabel = () => {
    //     return (
    //         <div>
    //         {this.state.allLabels.map((key) =>
    //             <List>
    //                 <Checkbox
    //                     value={key.label}
    //                     onClick={(e) => this.CheckedNotes(e, key.id)}>
    //                 </Checkbox>
    //                 {key.label}
    //             </List>
    //         )}
    //     </div>
    //     )
    // }