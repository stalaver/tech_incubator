import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCOKlbHJVEB7U9Oc5YOZwmRcFSTAkXkfAA",
  authDomain: "tech-incubator-qc.firebaseapp.com",
  projectId: "tech-incubator-qc",
  storageBucket: "tech-incubator-qc.appspot.com",
  messagingSenderId: "839746271416",
  appId: "1:839746271416:web:7923430568240fb3465c4d",
  measurementId: "G-QBPSLFVTYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();