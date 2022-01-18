// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
import {collection, getDocs, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC4Glpz9UkiabwYXuwthTKcsgBx6GIaVjg",
  authDomain: "loginexpo-51cc1.firebaseapp.com",
  projectId: "loginexpo-51cc1",
  storageBucket: "loginexpo-51cc1.appspot.com",
  messagingSenderId: "280156379389",
  appId: "1:280156379389:web:71bfddf3f7bce83f240694",
  databaseURL: "https://loginexpo-51cc1-default-rtdb.firebaseio.com",
  storageBucket: "loginexpo-51cc1.appspot.com",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const authen = getAuth(app);
export const database = getFirestore(app);

export const getTour = ()=>{
  return getDocs(collection(db, "Voucher"));
}
