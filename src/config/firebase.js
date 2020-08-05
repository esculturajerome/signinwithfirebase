import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGptG2EpilmG02sPLi7huRvaT2idatVYs",
  authDomain: "sign-up-with-firebase.firebaseapp.com",
  databaseURL: "https://sign-up-with-firebase.firebaseio.com",
  projectId: "sign-up-with-firebase",
  storageBucket: "sign-up-with-firebase.appspot.com",
  messagingSenderId: "65235949964",
  appId: "1:65235949964:web:6a1914170706e0c4fcdea9",
  measurementId: "G-DL9TVRNFJN",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
