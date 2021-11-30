import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWG0H1cEg53sHTU-usDDYxJuCMLfvnpvs",
  authDomain: "proyecto-dev-6fb95.firebaseapp.com",
  projectId: "proyecto-dev-6fb95",
  storageBucket: "proyecto-dev-6fb95.appspot.com",
  messagingSenderId: "889975126431",
  appId: "1:889975126431:web:d26f9c0abea7c26ff3a5aa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//data base
export const db = getFirestore(app)

export const Auth = getAuth(app)