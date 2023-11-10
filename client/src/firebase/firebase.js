import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAse0iW57FrBm4SkCC5O_WZLpznKESNp94",
  authDomain: "vidyo-f6bb7.firebaseapp.com",
  projectId: "vidyo-f6bb7",
  storageBucket: "vidyo-f6bb7.appspot.com",
  messagingSenderId: "940096787793",
  appId: "1:940096787793:web:c16a24f2c3bb9183ccef70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
