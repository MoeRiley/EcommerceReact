import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAesejm9fMWAnSsG-rPhDh2e-dQbwfrYNc",
  authDomain: "detodo-db.firebaseapp.com",
  projectId: "detodo-db",
  storageBucket: "detodo-db.firebasestorage.app",
  messagingSenderId: "125840428414",
  appId: "1:125840428414:web:a0c5c38bc30f20b0eb772f",
  measurementId: "G-YJ9MCESQD3"
}

export const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)