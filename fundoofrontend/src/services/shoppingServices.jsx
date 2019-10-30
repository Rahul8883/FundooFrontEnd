import axios from 'axios'
const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"
export default function getService() {
    return axios.get(baseURL + '/user/service', (err, data) => {
        if (err) {
            return err;
        } else {
            return data; 
        }
    })
}