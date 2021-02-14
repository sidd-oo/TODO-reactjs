import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcPKP22HM3Mz2ii4IgMUM23NDVhln1Ixw",
  authDomain: "todo-app-8d49f.firebaseapp.com",
  projectId: "todo-app-8d49f",
  storageBucket: "todo-app-8d49f.appspot.com",
  messagingSenderId: "164651845571",
  appId: "1:164651845571:web:c7778db9a6abf0096d9f76",
  measurementId: "G-CDQMSW48WD",
});

const db = firebaseApp.firestore();

export default db;
