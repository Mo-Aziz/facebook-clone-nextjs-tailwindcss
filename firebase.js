import * as firebase from "firebase/app";
// import firebase from "firebase/compat/app";
import "firebase/storage";
import {} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFppEX8xKPYk0Z29Pid4lFJBXp3rt47aM",
  authDomain: "facebook-clone-cd49a.firebaseapp.com",
  projectId: "facebook-clone-cd49a",
  storageBucket: "facebook-clone-cd49a.appspot.com",
  messagingSenderId: "825478060185",
  appId: "1:825478060185:web:d0627a7509cbf9f0fc4008",
  measurementId: "G-81V3C4JQJH",
};

const app = !firebase.getApps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore;
const storage = firebase.storage;

export { db, storage };
