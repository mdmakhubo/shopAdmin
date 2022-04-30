import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkOQcQ2hpr-Ufh-PFk_hK1j6K73UZYUKk",
  authDomain: "webshop-ca538.firebaseapp.com",
  projectId: "webshop-ca538",
  storageBucket: "webshop-ca538.appspot.com",
  messagingSenderId: "92505895976",
  appId: "1:92505895976:web:0212f71ffbaa856fe0311d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);