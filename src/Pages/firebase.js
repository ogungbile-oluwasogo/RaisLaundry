import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChYr9BRBPdcKxKNfBdPTSOp19JrizGw1M",
  authDomain: "raisusers-50f50.firebaseapp.com",
  projectId: "raisusers-50f50",
  storageBucket: "raisusers-50f50.appspot.com",
  messagingSenderId: "148516434887",
  appId: "1:148516434887:web:dbd574683b9ed54473dfe2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
