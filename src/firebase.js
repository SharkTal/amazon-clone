// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "Your firebase project apiKey",
    authDomain: "clone-8de1f.firebaseapp.com",
    projectId: "clone-8de1f",
    storageBucket: "clone-8de1f.appspot.com",
    messagingSenderId: "Your ID",
    appId: "Your APPID",
    measurementId: "Your ID"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
