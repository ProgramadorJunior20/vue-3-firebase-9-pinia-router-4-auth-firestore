import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDGHYJqLCbNssa1ilOhZS_BUnr78VU8YCQ",
  authDomain: "vue-3-2022-b3be3.firebaseapp.com",
  projectId: "vue-3-2022-b3be3",
  storageBucket: "vue-3-2022-b3be3.appspot.com",
  messagingSenderId: "931736854664",
  appId: "1:931736854664:web:d20bb0dd625e0ad5077f3d",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };
