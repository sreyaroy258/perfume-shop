// lib/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDihQaJ0NfN3T9XKCGT26Tn2WVSh85lLpk",
  authDomain: "perfume-shop-482dc.firebaseapp.com",
  projectId: "perfume-shop-482dc",
  storageBucket: "perfume-shop-482dc.firebasestorage.app",
  messagingSenderId: "931316852139",
  appId: "1:931316852139:web:61a14beeba53dc00c99eee",
  measurementId: "G-QB13TT7DVC"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth };
