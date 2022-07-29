// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, push } from "firebase/database";
import * as Facebook from 'expo-facebook';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';


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

export const auth = getAuth();
auth.languageCode = 'it';

export function signupUser(email, password) {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }

}

export const AddUser = (name, email, image) => {
  const db = getDatabase();
  const user = ref(db, 'users/');
  const newuser = push(user);
  try {
    return set(newuser,{
        name: name,
        email: email,
        image: image,
      })
  } catch (error) {
    return error;
  }
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])
  return currentUser;
}

const goole_provider = new GoogleAuthProvider();
const fb_provider = new FacebookAuthProvider();



goole_provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
goole_provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export function loginGoole() {
  return signInWithPopup(auth, goole_provider)
}

export async function loginFacebook() {
  signInWithPopup(auth, fb_provider) 
}

