import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB-SovFDPyg8fQhRpld62R89Ga_H_n_3vc",
    authDomain: "todo-7db41.firebaseapp.com",
    projectId: "todo-7db41",
    storageBucket: "todo-7db41.appspot.com",
    messagingSenderId: "617085490728",
    appId: "1:617085490728:web:3950067ff3bcbed993871d",
    measurementId: "G-FBMJ8QHN6M"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

