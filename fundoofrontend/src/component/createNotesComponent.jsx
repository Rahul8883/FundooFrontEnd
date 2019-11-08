import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { Card, Input } from '@material-ui/core'
class CreateNotesComponent extends Component {
    render() {
        return (
            <div>
               <Card>
               <div>
         
               
               
             
                    <input style={{ border:"none",  borderBottom: "1px solid lightgray"}} type = "text" placeholder = "Take a note..."/>
              
               
         
        </div>
               </Card>
            </div>
        )
    }
}
export default withRouter(CreateNotesComponent)
