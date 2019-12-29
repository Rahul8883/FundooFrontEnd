import axios from 'axios'
const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api"


function userRegister(data) {
    console.log("Data", data);
    
    return axios.post(baseURL + '/user/userSignup',data,{
    })
}
 function userLogin(data) {
     console.log("login data",data);
     
    return axios.post(baseURL + '/user/login', data)
}
 function userForgot(data) {
    return axios.post(baseURL + 'user/forgot', (err, data) => {
        if (err) {
            return err;
        } else {
            return data; 
        }
    })
}

export function getCartDetails(id) {
    console.log("data cart",id.cart_data);
    const cartId= id.cart_data
    return axios.get(baseURL + `/productcarts/getCartDetails/${cartId}`,{
       headers:{
           Authorization : localStorage.getItem('token')
       } 
    })
}

export  function userCartDetails() {    
    return axios.get(baseURL+`/productcarts/myCart`, {
      headers: {
        'Authorization': localStorage.getItem("token")
  
      }
    })
  }
  export  function placeOrder(data) {    
    return axios.post(baseURL+`/productcarts/placeOrder`,data, {
      headers: {
        'Authorization': localStorage.getItem("token")
  
      }
    })
  }

export default {userRegister, userLogin, userForgot, getCartDetails, userCartDetails, placeOrder} 