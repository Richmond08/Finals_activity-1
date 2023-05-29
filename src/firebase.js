import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmG9pvpFyVRXr8b4YuPiZ8zhK-fwrtjPc",
  authDomain: "react-crud-bff58.firebaseapp.com",
  databaseURL: "https://react-crud-bff58-default-rtdb.firebaseio.com",
  projectId: "react-crud-bff58",
  storageBucket: "react-crud-bff58.appspot.com",
  messagingSenderId: "1094790876573",
  appId: "1:1094790876573:web:56fd8ab575c1ac9a373374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);