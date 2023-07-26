import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz6dehQPH-J01Y6psPJNWY0PfdH-3B61c",
  authDomain: "p71p-869e6.firebaseapp.com",
  projectId: "p71p-869e6",
  storageBucket: "p71p-869e6.appspot.com",
  messagingSenderId: "575716720418",
  appId: "1:575716720418:web:e2b8b87b1241a89dd66f7b",
  measurementId: "G-DNRE3LJ1LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
