// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfWyZb3cB7nZOd-7jKKQLUel7DynSFGHw",
  authDomain: "fincastdea.firebaseapp.com",
  projectId: "fincastdea",
  storageBucket: "fincastdea.firebasestorage.app",
  messagingSenderId: "38749418349",
  appId: "1:38749418349:web:bc87e19150b1f2a347e064",
  measurementId: "G-H1ND6N9XFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
