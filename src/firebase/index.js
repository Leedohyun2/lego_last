import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhDde6s77eyMWFJdjI8YOlwC8jYXRXWmw",
  authDomain: "lego-54e1a.firebaseapp.com",
  projectId: "lego-54e1a",
  storageBucket: "lego-54e1a.appspot.com",
  messagingSenderId: "379585432058",
  appId: "1:379585432058:web:0dfd08d010bad03a787c43"
};


//필요한 파일에서 import하면됨
const app = initializeApp(firebaseConfig);
console.log('FIREBASE : hi');
export const db = getFirestore(app);