import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB8UqHg3lF9_mQa1bgoPF9YCVJfGXfGp4",
  authDomain: "yongama-africa.firebaseapp.com",
  databaseURL: "https://yongama-africa-default-rtdb.firebaseio.com",
  projectId: "yongama-africa",
  storageBucket: "yongama-africa.appspot.com",
  messagingSenderId: "515657059476",
  appId: "1:515657059476:web:4aea1d6a5ba6e92b49f881"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, get };
