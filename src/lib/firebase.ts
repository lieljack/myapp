import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpRlojnvVqmXUyyyCHLDh3iuOrhR38_p0",
    authDomain: "sveltecourse-65cea.firebaseapp.com",
    projectId: "sveltecourse-65cea",
    storageBucket: "sveltecourse-65cea.appspot.com",
    messagingSenderId: "314372004061",
    appId: "1:314372004061:web:c842216a0bec040a222334",
    measurementId: "G-FVZ814S1MB"
  };

//   Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()