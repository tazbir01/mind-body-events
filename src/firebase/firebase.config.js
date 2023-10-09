// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhHT-UYlVc5972Z6SgZGvusjxogkOlKSk",
  authDomain: "mind-body-events.firebaseapp.com",
  projectId: "mind-body-events",
  storageBucket: "mind-body-events.appspot.com",
  messagingSenderId: "1048277091601",
  appId: "1:1048277091601:web:875526e1f424042302f8b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;