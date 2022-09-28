// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkBjtxHQ-LctUUZ9QYIpT7Fq80Nb0rXDw",
  authDomain: "auth-fa3ff.firebaseapp.com",
  projectId: "auth-fa3ff",
  storageBucket: "auth-fa3ff.appspot.com",
  messagingSenderId: "1044134671468",
  appId: "1:1044134671468:web:4bcfb7b0df81fa549ad449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);