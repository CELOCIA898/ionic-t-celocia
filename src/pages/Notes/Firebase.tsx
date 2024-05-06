// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArbK9_tzZ12CmQkHatBtR5YuqcF1H1eJU",
    authDomain: "ion-t-celocia.firebaseapp.com",
    projectId: "ion-t-celocia",
    storageBucket: "ion-t-celocia.appspot.com",
    messagingSenderId: "863578722307",
    appId: "1:863578722307:web:66b43e0893b71fffd77e36",
    measurementId: "G-B78BGKM9LY"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}