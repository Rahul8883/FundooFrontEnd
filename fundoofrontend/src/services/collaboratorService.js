import axios from 'axios';

/*-------------------------Main url of back-end Api services-----------------------*/

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"
export function CollabeNotes(data){
    return axios.post(baseURL+'/notes/{id}/AddcollaboratorsNotes',data,{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    })
  }
  export function getUserList(data){
    return axios.get(baseURL+'/user',{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    })
  }
  export function Addcollaborators(data,noteId){
    return axios.post(baseURL+`/notes/${noteId}/AddcollaboratorsNotes`,data,{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    })
  }
  export function RemoveCollaborators(id,collaboratorUserId){
    return axios.delete(baseURL+`/notes/${id}/removeCollaboratorsNotes/${collaboratorUserId}`,{
      headers:{
        'Authorization': localStorage.getItem('token')
      }
    })
  }
  export function searchUserList(data) {
    return axios.post(baseURL+'/user/searchUserList', data, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
    
  }