// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbiPWGCMyG2Hk_S9EVN0WnTirtqGbSLs4",
  authDomain: "rt-task-management.firebaseapp.com",
  projectId: "rt-task-management",
  storageBucket: "rt-task-management.appspot.com",
  messagingSenderId: "147029058804",
  appId: "1:147029058804:web:d7d4565570f45d56482aa1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, "http://localhost", 8080);
