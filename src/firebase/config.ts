// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyArm6ZSOUZLvpeff-5OpJvuRno7zej9tEs",
  authDomain: "sts-online-292d5.firebaseapp.com",
  databaseURL: "https://sts-online-292d5-default-rtdb.firebaseio.com",
  projectId: "sts-online-292d5",
  storageBucket: "sts-online-292d5.appspot.com",
  messagingSenderId: "770461727146",
  appId: "1:770461727146:web:6edd4839cb724df53b93d3",
  measurementId: "G-K017VE3P05",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
