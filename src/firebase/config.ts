import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuL2L1OeWRRMgj9HXoBX3FbTvOQ4O4w8I",
  authDomain: "logbookapp-ca1a0.firebaseapp.com",
  databaseURL: "https://logbookapp-ca1a0-default-rtdb.firebaseio.com",
  projectId: "logbookapp-ca1a0",
  storageBucket: "logbookapp-ca1a0.firebasestorage.app",
  messagingSenderId: "764363822742",
  appId: "1:764363822742:web:43639cef835aa15ba654b7",
  measurementId: "G-2E27WGJH8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };