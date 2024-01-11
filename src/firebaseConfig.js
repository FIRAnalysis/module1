
//import { initializeApp } from "firebase/app";
import  firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
//import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyA1AOMSai8hWABBAxHmkRk2Y0RC_pT8POE",
  authDomain: "fir-course-8a6f7.firebaseapp.com",
  projectId: "fir-course-8a6f7",
  storageBucket: "fir-course-8a6f7.appspot.com",
  messagingSenderId: "867777724670",
  appId: "1:867777724670:web:3be528e1a7f7d7fd8ee5af",
  measurementId: "G-LMM5DV1E1S"
};

const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;