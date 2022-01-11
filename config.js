// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBESF0q3DsheOwoR-EpDCDg6sth9vDSzSY",
  authDomain: "e-ride-28a36.firebaseapp.com",
  projectId: "e-ride-28a36",
  storageBucket: "e-ride-28a36.appspot.com",
  messagingSenderId: "89963207054",
  appId: "1:89963207054:web:a843a4e4047ae797ea2cdf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();