// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYZtfpPNwL74MzLsFl8-bSmyawzU_OtSs",
  authDomain: "clone-53273.firebaseapp.com",
  projectId: "clone-53273",
  storageBucket: "clone-53273.firebasestorage.app",
  messagingSenderId: "612839315198",
  appId: "1:612839315198:web:13c9e31bd52091e00cb7af",
  measurementId: "G-2T7CDDF1SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();