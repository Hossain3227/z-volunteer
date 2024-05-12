// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX3NAtXrh-4liwDKkG7yoxXBoWqsWaOmU",
  authDomain: "react-volunteer-site.firebaseapp.com",
  projectId: "react-volunteer-site",
  storageBucket: "react-volunteer-site.appspot.com",
  messagingSenderId: "266833834786",
  appId: "1:266833834786:web:0874d09aef805b542eeb7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);