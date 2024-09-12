import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4g49rSZVLaHHe2l0ZF8RHJV7m3RzxNUM",
  authDomain: "todo-a1dcc.firebaseapp.com",
  projectId: "todo-a1dcc",
  storageBucket: "todo-a1dcc.appspot.com",
  messagingSenderId: "78252818129",
  appId: "1:78252818129:web:5d6afe345e955f5ef94ff0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  // Initialize Firebase Auth correctly
const firestore = getFirestore(app);  // Initialize Firestore

export { auth, firestore };