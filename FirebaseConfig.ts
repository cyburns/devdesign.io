// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//BBKSaWtnnDKFGVlRrLTjbUnUisvz9ZNB6DXMpdpvVm8zmuxVY3yoOcC00XbksNayHkpAbZN3dBmuB44bCbqS9fI

const firebaseConfig = {
  apiKey: "AIzaSyATjEYv0X7eJuGpjsIWy4LI77Z5cxzjfhY",
  authDomain: "bright-cbdcf.firebaseapp.com",
  projectId: "bright-cbdcf",
  storageBucket: "bright-cbdcf.appspot.com",
  messagingSenderId: "258286969271",
  appId: "1:258286969271:web:52090cf9b9db3f2eee0832",
  measurementId: "G-XP0QME4DYG",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getFirestore(FIREBASE_APP);
