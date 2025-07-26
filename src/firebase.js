// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATstibUjXwarSj1gLYV1U7_1VHrlvIy-o",
  authDomain: "paxetica.firebaseapp.com",
  projectId: "paxetica",
  storageBucket: "paxetica.firebasestorage.app",
  messagingSenderId: "2194115030",
  appId: "1:2194115030:web:8e2a59bb1f878295017c77",
  measurementId: "G-ZS6XYYHQWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);