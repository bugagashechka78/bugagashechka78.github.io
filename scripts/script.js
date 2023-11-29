// Import the functions you need from the SDKs you need

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

import {
    login_email,
    login_password,
    sing_in,
    sing_up,
    register_number,
    register_email,
    register_name,
    register_password
} from "./ui.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcKUzjlg-gQJcLfKXD_V7ntI_HNt-D2hA",
    authDomain: "auth-a6a98.firebaseapp.com",
    projectId: "auth-a6a98",
    storageBucket: "auth-a6a98.appspot.com",
    messagingSenderId: "812208555351",
    appId: "1:812208555351:web:5392522b56ef2e6740aa12",
    measurementId: "G-47ZS6F1LR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const loginByEmailPassword = async () => {
    const login_email_value = login_email.value;
    const login_password_value = login_password.value;
    try {
        await signInWithEmailAndPassword(auth, login_email_value, login_password_value);
        console.log("Hi");
        window.location.href = "../site/index.html";
    } catch (error) {
        console.log(error)
    }
}

const registerByEmailPasswordNumber = async () => {
    const reg_email = register_email.value;
    const reg_name = register_name.value;
    const reg_password = register_password.value;
    const reg_value = register_number.value;

    try{
        await createUserWithEmailAndPassword(auth, reg_email, reg_password);
        console.log("New");
        window.location.href = "../login/index.html";
    }
    catch (error){
        console.log(error);
    }
}
// console.log(window.location)
if (window.location.pathname==="/Web/login/login/index.html"){
    sing_in.addEventListener("click", loginByEmailPassword)
}
else if (window.location.pathname==="/Web/login/registration/index.html"){
    sing_up.addEventListener("click", registerByEmailPasswordNumber)
}


