import axios from 'axios';

/*-------------------------Main url of back-end Api services-----------------------*/

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"
/*-------------------------create note services-----------------------*/

export function createNote(data) {
    console.log("data in create notes", data);

    return axios.post(baseURL + "/notes/addNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------getNotes services-----------------------*/

export function getNote() {
    return axios.get(baseURL + "/notes/getNotesList", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------updateNote services-----------------------*/

export function updateNote(data) {
    console.log("resultant data of UpdateNote in services", data);
    return axios.post(baseURL + "/notes/updateNotes", data, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}
/*-------------------------Archive services-----------------------*/

export function archiveNotes(data) {
    console.log("archive data in service", data);

    return axios.post(baseURL + "/notes/archiveNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------color services-----------------------*/

export function changeColor(data) {
    return axios.post(baseURL + "/notes/changesColorNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------Trash services-----------------------*/

export function TrashNotes(data) {
    console.log("data in trash notes services", data);

    return axios.post(baseURL + "/notes/trashNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------Reminder services-----------------------*/

export function addReminder(data) {
    console.log("data in trash note service", data);
    return axios.post(baseURL + "/notes/addUpdateReminderNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }

    })
}

export function setReminder(data) {
    return axios.post(baseURL + "/notes/addUpdateReminderNotess", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

export function removeReminder(data) {
    return axios.post(baseURL + "/notes/removeReminderNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
/*-------------------------noteLabel services-----------------------*/

export function CreateLabel(id, data) {

    console.log("data in getLabel note service", data);
    return axios.post(baseURL + "/notes/{id}/noteLabels", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

export function getLabel() {
    return axios.get(baseURL + "/noteLabels/getNoteLabelList", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}

// export function CreateNoteLabel(data) {
//     console.log("data in getLabel note service", data);
//     return axios.post(baseURL + "/noteLabels", data, {
//         headers: {
//             "Authorization": localStorage.getItem("token")
//         }
//     })
// }