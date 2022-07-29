// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAKmt50wPzgbdXuX1UtvgR47Oxa5Sge-vA",
  authDomain: "reactnative-1dfd8.firebaseapp.com",
  projectId: "reactnative-1dfd8",
  storageBucket: "reactnative-1dfd8.appspot.com",
  messagingSenderId: "537975960960",
  appId: "1:537975960960:web:6b15832176e9787bebfd65",
  measurementId: "G-MK5VR235J6"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const authen = getAuth(app);
export const database = getFirestore(app);

export const getTour = ()=>{
  return getDocs(collection(db, "Voucher"));
}
