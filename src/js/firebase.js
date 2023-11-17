import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC51tW4sMu6hTATkjlOHkxFL9zpa37056Y",
  authDomain: "rocket-tasks-6109e.firebaseapp.com",
  projectId: "rocket-tasks-6109e",
  storageBucket: "rocket-tasks-6109e.appspot.com",
  messagingSenderId: "188009958729",
  appId: "1:188009958729:web:430ca1150b0bea1e7e1e98"
}

const app = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
  db
}