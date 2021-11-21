import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDjVISuvsD-i_wh2xrlWH-Pn_rKowyaBco",
  authDomain: "lizzie-s-shop-db.firebaseapp.com",
  projectId: "lizzie-s-shop-db",
  storageBucket: "lizzie-s-shop-db.appspot.com",
  messagingSenderId: "148697900729",
  appId: "1:148697900729:web:29c1a5c56d4a69ccf15d68",
  measurementId: "G-9WR44CWEJM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
