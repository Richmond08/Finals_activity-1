import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "rich-cc0d6.firebaseapp.com",
  projectId: "rich-cc0d6",
  storageBucket: "rich-cc0d6.appspot.com",
  messagingSenderId: "582167277473",
  appId: "1:582167277473:web:bd744d1c68eaf90828e5e0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);



 