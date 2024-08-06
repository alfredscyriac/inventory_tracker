// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa05I3vMWdCq93DPddWBtevQG8ig91S-4",
  authDomain: "inventory-management-f28e4.firebaseapp.com",
  projectId: "inventory-management-f28e4",
  storageBucket: "inventory-management-f28e4.appspot.com",
  messagingSenderId: "841086485584",
  appId: "1:841086485584:web:910b0868acd77d614dbd55",
  measurementId: "G-QCLHH2SE3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}