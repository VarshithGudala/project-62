// Import the functions you need from the SDKs you need
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBrbV8J-MHFqmy3lPUrAwo2_ZLGJWdxY5w",
  authDomain: "school-attendance-2114a.firebaseapp.com",
  databaseURL:"https://school-attendance-2114a-default-rtdb.firebaseio.com/",
  projectId: "school-attendance-2114a",
  storageBucket: "school-attendance-2114a.appspot.com",
  messagingSenderId: "43140207357",
  appId: "1:43140207357:web:60b5264955c20ff0542494"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
