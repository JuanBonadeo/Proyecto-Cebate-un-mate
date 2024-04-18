import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9xa0cPPRmXHr629Vp0UqlHBNjNkhVdbM",
  authDomain: "cebate-un-mate.firebaseapp.com",
  projectId: "cebate-un-mate",
  storageBucket: "cebate-un-mate.appspot.com",
  messagingSenderId: "460317034503",
  appId: "1:460317034503:web:cb4f1a46718c4a71ca42a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreInstance = () => {
  return getFirestore(app);
};
export const storage = getStorage(app);
//Initialize Firestore
export const db = getFirestore(app)