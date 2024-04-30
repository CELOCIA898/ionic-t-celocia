// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi3CG5BGNGpfdtM_gbSUIFpjX0fo2AutY",
  authDomain: "it35-celocia.firebaseapp.com",
  projectId: "it35-celocia",
  storageBucket: "it35-celocia.appspot.com",
  messagingSenderId: "786125995458",
  appId: "1:786125995458:web:e8ba77fe08f88d4a2eea5b",
  measurementId: "G-0GFZ98JKTL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{db};