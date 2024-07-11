// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5YjHROOW1ZYMBONl8gEA0_ZFupWtViCc",
  authDomain: "no-corruption-1274f.firebaseapp.com",
  projectId: "no-corruption-1274f",
  storageBucket: "no-corruption-1274f.appspot.com",
  messagingSenderId: "10419782885",
  appId: "1:10419782885:web:19047e8a762b898cb3000c",
  measurementId: "G-1KH567631B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);