import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "board-842ea.firebaseapp.com",
  projectId: "board-842ea",
  storageBucket: "board-842ea.appspot.com",
  messagingSenderId: "151946550151",
  appId: "1:151946550151:web:fc566b5b6e952873ce1122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export default db
export {
   auth,
   provider
}
