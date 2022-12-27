
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// const provider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// export const storage = getStorage(app);


// export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUDDsrr6rlceWSNpjebzIeoNLNNhEJV3s",
  authDomain: "youlyu2.firebaseapp.com",
  databaseURL: "https://youlyu2-default-rtdb.firebaseio.com",
  projectId: "youlyu2",
  storageBucket: "youlyu2.appspot.com",
  messagingSenderId: "109665521093",
  appId: "1:109665521093:web:35398dbb1042be576d4fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);