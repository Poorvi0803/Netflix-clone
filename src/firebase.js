import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXDT6Hxy1Ux2zU7S-aUlO21SGeqvFd3Nc",
    authDomain: "netflix-d9f14.firebaseapp.com",
    projectId: "netflix-d9f14",
    storageBucket: "netflix-d9f14.appspot.com",
    messagingSenderId: "1041083019553",
    appId: "1:1041083019553:web:37e3ab25ff54e998e70e60"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};