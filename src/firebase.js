import { initializeApp } from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_JQ8vunpxp-5mJQj8ibkPkNaFTEaEih4",
  authDomain: "tesla-61dce.firebaseapp.com",
  projectId: "tesla-61dce",
  storageBucket: "tesla-61dce.appspot.com",
  messagingSenderId: "139395909110",
  appId: "1:139395909110:web:f376c56f1218bef30fb3d7"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth()

export const SignUp=(email,pwd)=>{
  return createUserWithEmailAndPassword(auth,email,pwd)
}

export const LogIn=(email,pwd)=>{
  return signInWithEmailAndPassword(auth,email,pwd)
}