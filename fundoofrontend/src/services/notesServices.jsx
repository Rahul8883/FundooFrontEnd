import axios from 'axios';
const baseURL="http://fundoonotes.incubation.bridgelabz.com/api"
export function createNote(data){
    console.log("data in create notes",data);
    
    return axios.post(baseURL+"/notes/addNotes", data,{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}


export function getNote(){
    return axios.get(baseURL+"/notes/getNotesList",{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}


export function updateTitle(data){
    return axios.post(baseURL+`notes/updateNotes`, data,{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}


export function updateDiscription(data){
    return axios.post(baseURL+`notes/updateNotes`, data,{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}



export function archiveNotes(data){
    return axios.post(baseURL+`notes/archiveNotes`, data,{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}


export function changeColor(data){
    return axios.post(baseURL+`notes/changesColorNotes`, data,{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}