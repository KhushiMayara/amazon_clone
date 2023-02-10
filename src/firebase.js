import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzASWCkOKfscqYOS7mpLXX2nq6F8RyIeg",
  authDomain: "foodapp-b158c.firebaseapp.com",
  databaseURL: "https://foodapp-b158c-default-rtdb.firebaseio.com",
  projectId: "foodapp-b158c",
  storageBucket: "foodapp-b158c.appspot.com",
  messagingSenderId: "520365603174",
  appId: "1:520365603174:web:9cd76bd88cf861879330a7",
};

//   *********  initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

//   *********   custom hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
