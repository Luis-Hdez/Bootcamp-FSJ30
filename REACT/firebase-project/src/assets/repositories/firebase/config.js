// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcLEDVDiekoivxKrbbfG__y8DvXRdc9DU",
  authDomain: "authentication-a2c29.firebaseapp.com",
  projectId: "authentication-a2c29",
  storageBucket: "authentication-a2c29.firebasestorage.app",
  messagingSenderId: "747491119357",
  appId: "1:747491119357:web:3025e22159c4a56457ee94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);