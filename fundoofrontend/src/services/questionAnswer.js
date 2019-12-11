import axios from 'axios';

/*-------------------------Main url of back-end Api services-----------------------*/

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"

/*-------------------------get select note services-----------------------*/

export function getSelectNotes(data) {
    console.log("data in create notes", data);

    return axios.get(baseURL + "/notes/getNotesDetail/{noteId}", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

/*-------------------------get select note services-----------------------*/

export function getQuestionAnswer(data) {
    console.log("data in create notes", data);

    return axios.post(baseURL + "/questionAndAnswerNotes/addQuestionAndAnswer", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}