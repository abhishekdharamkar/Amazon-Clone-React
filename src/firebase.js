// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import "firebase/compat/auth"
import "firebase/compat/firestore"
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "AIzaSyCDpivlw0dzkw6vs8Ut1J0VkTBQ4F3TWGs",
    authDomain: "clone-b04f6.firebaseapp.com",
    projectId: "clone-b04f6",
    storageBucket: "clone-b04f6.appspot.com",
    messagingSenderId: "1060110078847",
    appId: "1:1060110078847:web:3de0ad2fd8e6bf3115404a",
    measurementId: "G-F2J5LHRJ73"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
 
export { db, auth };