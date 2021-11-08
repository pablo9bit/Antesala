import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAjmBgZwR1fII9k9BFyja7AzQ2PChpljew",
  authDomain: "usuarios-aa4c6.firebaseapp.com",
  projectId: "usuarios-aa4c6",
  storageBucket: "usuarios-aa4c6.appspot.com",
  messagingSenderId: "813704676116",
  appId: "1:813704676116:web:90c1b1841ea80750f1b801",
  measurementId: "G-F1Z49LNJQ2",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
//const db = firebase.firestore();

const provider = new GoogleAuthProvider();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    // const res = await auth.createUserWithEmailAndPassword(email, password);
    // const user = res.user;
    /*   await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    }); */
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {
  firebase,
  auth,
  provider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
};
