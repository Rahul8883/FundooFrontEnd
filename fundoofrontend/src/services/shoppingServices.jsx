/******************************************************************************************
 * @purpose : Accessing Axios here for Make http requests from node.js and hitting back-end
 * @file : shopingServices.jsx.jsx
 * @module :  Access base URL, to read the property of back-end.
 * @author : Rahul Ranjan
 * @version : 1.0
 * @since : 29-oct-2019
 ******************************************************************************************/
import axios from 'axios'
// Back-end Api's URL
const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"
export default  function userServic() {
    return axios.get(baseURL + '/user/service', (err, data) => {
        if (err) {
            return err;
        } else {
            return data;
        }
    })
}
// function addToCart() {
//     return axios.post(baseURL + '/productscarts/addToCart', (err, data) => {
//         if (err) {
//             return err;
//         } else {
//             return data;
//         }
//     })

// }
// function userCartDetail() {
//     return axios.get(baseURL + `/productscarts/productcarts/mycart`, {
//         headers: {
//             'Authorization': localStorage.getItem("Token")
//         }
//     })
// }

// export default { userCartDetail, addToCart, userService };

