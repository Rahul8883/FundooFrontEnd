import axios from 'axios';
const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"

export function createNote(data) {
    console.log("data in create notes", data);

    return axios.post(baseURL + "/notes/addNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function getNote() {
    return axios.get(baseURL + "/notes/getNotesList", {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function updateTitle(data) {
    return axios.post(baseURL + `notes/updateNotes`, data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function updateDiscription(data) {
    return axios.post(baseURL + `notes/updateNotes`, data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function archiveNotes(data) {
    console.log("archive data in service", data);

    return axios.post(baseURL + "/notes/archiveNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function changeColor(data) {
    return axios.post(baseURL + "/notes/changesColorNotes", data, {
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
export function TrashNotes(data) {
    console.log("data in trash notes services", data);

    return axios.post(baseURL + "/notes/trashNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })
}
export function addReminder(data) {
    console.log("data in trash note service", data);
    return axios.post(baseURL + "/notes/addUpdateReminderNotes", data, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
        
    })
}
