// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86xFsWo-vO3CqjXvI8wexrEaWcZ8mtoA",
  authDomain: "react-dragon-news-auth-3ec9f.firebaseapp.com",
  projectId: "react-dragon-news-auth-3ec9f",
  storageBucket: "react-dragon-news-auth-3ec9f.firebasestorage.app",
  messagingSenderId: "316213294503",
  appId: "1:316213294503:web:fedc32f00d4218477e3282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);