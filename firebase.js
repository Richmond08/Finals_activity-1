import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBru428_tiTtPToomlfZqaHVyhekl9VtpI",
  authDomain: "react-todo-50d9c.firebaseapp.com",
  projectId: "react-todo-50d9c",
  storageBucket: "react-todo-50d9c.appspot.com",
  messagingSenderId: "114858681193",
  appId: "1:114858681193:web:a5ec957eade049893753f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
