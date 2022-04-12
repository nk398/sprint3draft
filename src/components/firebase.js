import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyDxrbU1u49R7Rmd4BxUkO-RSBTY4shdfM4",
  authDomain: "auth-development-605b4.firebaseapp.com",
  databaseURL: "https://auth-development-605b4-default-rtdb.firebaseio.com",
  projectId: "auth-development-605b4",
  storageBucket: "auth-development-605b4.appspot.com",
  messagingSenderId: "1016616956444",
  appId: "1:1016616956444:web:93064645917026b76365d9"
})

export const auth = app.auth()
export default app
