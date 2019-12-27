import React, { Component } from 'react'
import { getNote } from '../services/notesServices'
import { Card, InputBase } from '@material-ui/core'
import {userFire} from '../Controller/controller'

export class dragAndDrop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: [],
            openNote: false
        }
    }
    componentDidMount() {
        this.getAllNotesForDrag()
    }
    getAllNotesForDrag = () => {
        getNote().then(res => {
            console.log(res);
            this.setState({
                notes: res.data.data.data
            })
          
            userFire(this.state.notes) 

        }).catch(err => {
            console.log(err);

        })
    }
  


// userData=()=>{
//     var data={
//         data1 :this.state.notes
//     }
//     userFire(data)
// }

        
    render() {

        return (
            <div className="drag_1" style={{
                display: "flex",
                width: "86em",
                justifyContent:"center"
            }}>
                <div className="drag_2" style={{
                    display: "flex",
                    width: "54em",
                    flexWrap: "wrap"
                }}>
                    {this.state.notes.map((key) => {
                        return (


                            <Card style={{padding:"10px",margin:"10px", backgroundColor: "orange", width: "220px", height: "auto", minHeight: "140px" }}>
                                <InputBase
                                    value={key.title}
                                    multiline
                                />
                                <InputBase
                                    value={key.description}
                                    multiline />
                            </Card>



                        )
                    })}
                </div>

            </div>
        )
    }
}

export default dragAndDrop
