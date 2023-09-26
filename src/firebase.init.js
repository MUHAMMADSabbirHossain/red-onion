// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDu518ucrGCDlA3sIQ3jq5y9uEt28n38Kc",
    authDomain: "red-onion-5fa00.firebaseapp.com",
    projectId: "red-onion-5fa00",
    storageBucket: "red-onion-5fa00.appspot.com",
    messagingSenderId: "186483389302",
    appId: "1:186483389302:web:3f92dd17864223ac924057"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;