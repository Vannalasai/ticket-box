import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyABYaYZqzSvJl4HdYJ9gJD3jaQYLzgIW5I",
  authDomain: "ticketcounter-40bd9.firebaseapp.com",
  projectId: "ticketcounter-40bd9",
  storageBucket: "ticketcounter-40bd9.firebasestorage.app",
  messagingSenderId: "283188491545",
  appId: "1:283188491545:web:b4738c9010af4152720188"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);