import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqa21BH3bsAnkgd5M-Pb8fwylqOL6GWEA",
  authDomain: "facebook-8b9e1.firebaseapp.com",
  databaseURL: "https://facebook-8b9e1.firebaseio.com",
  projectId: "facebook-8b9e1",
  storageBucket: "facebook-8b9e1.appspot.com",
  messagingSenderId: "575473620361",
  appId: "1:575473620361:web:8f8672449b4d99193d7d58",
  measurementId: "G-KNX20RZ3X9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
