// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyC8YkHkjzFjkh8U1hKnjS1sih2V115uBcQ',
    authDomain: "yummmzo.firebaseapp.com",
    projectId: "yummmzo",
    storageBucket: "yummmzo.appspot.com",
    messagingSenderId: "543341460612",
    appId: "1:543341460612:web:2ea78b0b3bc40a1fc556d1",
    measurementId: "G-FVLNKPSD8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);