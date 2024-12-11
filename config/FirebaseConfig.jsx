// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQZ_xNGl05P4_sg9UbLz97KxdHWTQ_5es",
  authDomain: "mediminder-19e06.firebaseapp.com",
  projectId: "mediminder-19e06",
  storageBucket: "mediminder-19e06.firebasestorage.app",
  messagingSenderId: "259584842185",
  appId: "1:259584842185:web:2c51dbd573a06a20ecf018",
  measurementId: "G-CPJPWSHP3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
