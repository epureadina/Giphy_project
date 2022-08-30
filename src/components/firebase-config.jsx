import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDrkV756-xJhYKsvIIwo0N4wwEPEbDgua0",
  authDomain: "giphy-project-c60a1.firebaseapp.com",
  projectId: "giphy-project-c60a1",
  storageBucket: "giphy-project-c60a1.appspot.com",
  messagingSenderId: "750600041432",
  appId: "1:750600041432:web:3259e43e60852ca04d38ad",
  measurementId: "G-N1N3KZQ6F8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
