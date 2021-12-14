import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeqhrSklEcyp8SkZnT-dCBLyG0_xY4fes",
  authDomain: "boggle-assn5.firebaseapp.com",
  projectId: "boggle-assn5",
  storageBucket: "boggle-assn5.appspot.com",
  messagingSenderId: "932844961452",
  appId: "1:932844961452:web:c66c2281dc97172daee909",
  measurementId: "G-1G5BZK7YG4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;