import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3n0HGAvZnbPrfO3u-WbE4vTUMwOCV1Mo",
  authDomain: "example-project-8e11c.firebaseapp.com",
  projectId: "example-project-8e11c",
  storageBucket: "example-project-8e11c.appspot.com",
  messagingSenderId: "756697704887",
  appId: "1:756697704887:web:6eccab07ea6b91de75a032",
  measurementId: "G-HPMCH7SP1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;