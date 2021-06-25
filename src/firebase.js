// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBjCiUFyXHTzmG3qB5Xo0py6N2cCB0jIE",
    authDomain: "clone-8de1f.firebaseapp.com",
    projectId: "clone-8de1f",
    storageBucket: "clone-8de1f.appspot.com",
    messagingSenderId: "349590860854",
    appId: "1:349590860854:web:abb14c2576b878108f1497",
    measurementId: "G-12GHHD9BQ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };