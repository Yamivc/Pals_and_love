import firebase from 'firebase/compat/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7l31wYlfHr-Od-JQcomamE718FHqTdn8",
    authDomain: "un1verse-bcd30.firebaseapp.com",
    databaseURL: "https://un1verse-bcd30-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "un1verse-bcd30",
    storageBucket: "un1verse-bcd30.appspot.com",
    messagingSenderId: "833725110858",
    appId: "1:833725110858:web:acf58cc65799d06862e4b3"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
