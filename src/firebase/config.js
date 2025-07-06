import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDhwxopsM9MUz0s9BelKYI2CJSt3BcXR_Q",
  authDomain: "geek-store-db-384e1.firebaseapp.com",
  projectId: "geek-store-db-384e1",
  storageBucket: "geek-store-db-384e1.firebasestorage.app",
  messagingSenderId: "995052516482",
  appId: "1:995052516482:web:726ddaeac7d5472928709b",
  measurementId: "G-72RZHE1KVD"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);