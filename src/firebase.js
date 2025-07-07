// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update ,runTransaction} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtT782GGhMeprgMuzem7ti3_YiKYwige4",
  authDomain: "my-portfolio-5c8ba.firebaseapp.com",
  databaseURL: "https://my-portfolio-5c8ba-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-5c8ba",
  storageBucket: "my-portfolio-5c8ba.firebasestorage.app",
  messagingSenderId: "551586506011",
  appId: "1:551586506011:web:ff4b3505e2cf0925b9dfbe"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set, update ,runTransaction};
