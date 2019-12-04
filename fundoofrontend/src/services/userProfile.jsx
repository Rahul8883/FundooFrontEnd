import axios from 'axios';

/*-------------------------Main url of back-end Api services-----------------------*/

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"
/*-------------------------create note services-----------------------*/

export  function profilePicUpload(data) {
    console.log("data in create notes", data);
    return axios.post(baseURL + "/user/uploadProfileImage", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function Logout(){
    return axios.post(baseURL+'/user/logout',{
        headers:{
            "Authorization" :localStorage.getItem("token")
        }
    })
}