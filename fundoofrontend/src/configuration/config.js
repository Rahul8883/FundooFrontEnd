import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDwPat2Si2GP2dhJHuQm_iHMiq8GL3EXTM",
    authDomain: "fundoonotes-7c8ac.firebaseapp.com",
    databaseURL: "https://fundoonotes-7c8ac.firebaseio.com",
    projectId: "fundoonotes-7c8ac",
    storageBucket: "fundoonotes-7c8ac.appspot.com",
    messagingSenderId: "535004004313",
    appId: "1:535004004313:web:572d50c16f80857a4fa3c8",
    measurementId: "G-Y3XKS6WJ8Q"
};
// Initialize Firebase
let firebaseData = firebase.initializeApp(firebaseConfig);
export default firebaseData