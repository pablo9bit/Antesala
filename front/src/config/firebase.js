import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
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



const signInWithGooglePopup = async () => {
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    /* const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    } */
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithGoogleRedirect = async () => {
  try {
    signInWithRedirect(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    /* const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    } */
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
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
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
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
const logout = () => {
  auth.signOut();
};
const onAuthStateChange = () => {
  try {
    auth.onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  } catch {}
};

export {
  firebase,
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  onAuthStateChange,
};
