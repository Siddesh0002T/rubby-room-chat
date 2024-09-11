// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv35o4Ymb-poEMjc1tNZ4HFC_Ty6hAZfs",
  authDomain: "rubbyroomchat.firebaseapp.com",
  projectId: "rubbyroomchat",
  storageBucket: "rubbyroomchat.appspot.com",
  messagingSenderId: "779342880819",
  appId: "1:779342880819:web:7b0730af502f4d7bc58346",
  measurementId: "G-ZVW29BM3QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
