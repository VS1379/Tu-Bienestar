// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB773NmwUNKDknYB3k1efFQMqHUhTqTkcA",
  authDomain: "tu-bienestar-24dd7.firebaseapp.com",
  projectId: "tu-bienestar-24dd7",
  storageBucket: "tu-bienestar-24dd7.appspot.com",
  messagingSenderId: "575446966150",
  appId: "1:575446966150:web:ce0b2c5869b2e12f085607"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase