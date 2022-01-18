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

