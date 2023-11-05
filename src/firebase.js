import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPMW8mp-oMQGRcgasdDCXRqneWBmUZfrE",
  authDomain: "mychattingapp-26c17.firebaseapp.com",
  projectId: "mychattingapp-26c17",
  storageBucket: "mychattingapp-26c17.appspot.com",
  messagingSenderId: "991277352217",
  appId: "1:991277352217:web:d2751dbe70741dcc473188"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


