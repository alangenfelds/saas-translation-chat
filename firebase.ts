import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB3Q5McXkeMImPkixnUU8IZPIQhtdkdS8",
  authDomain: "saas-multi-lingual-chat.firebaseapp.com",
  projectId: "saas-multi-lingual-chat",
  storageBucket: "saas-multi-lingual-chat.appspot.com",
  messagingSenderId: "181890459192",
  appId: "1:181890459192:web:4eab595d945e95cb21e8cd",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
