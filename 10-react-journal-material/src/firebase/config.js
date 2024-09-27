// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAMIK1zf4PDJgdeHRMRMGyrQLVM-B3em-E",
  authDomain: "react-cursos-4bb36.firebaseapp.com",
  projectId: "react-cursos-4bb36",
  storageBucket: "react-cursos-4bb36.appspot.com",
  messagingSenderId: "1060535797031",
  appId: "1:1060535797031:web:648346b7592daa88b85502"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);