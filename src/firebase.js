
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMuwSupxZd3cLv2eIxJiOCHkRZRWiEQkg",
  authDomain: "chat-304bb.firebaseapp.com",
  projectId: "chat-304bb",
  storageBucket: "chat-304bb.appspot.com",
  messagingSenderId: "912802616025",
  appId: "1:912802616025:web:e91bbdc29d99a548dc64c8"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
