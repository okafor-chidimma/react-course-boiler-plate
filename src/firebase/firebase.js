import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database(); // exposes all the methods attached to the database module of firebase


//Step 1 in google authentication to create a provider for our google authentication for every user
// configuration
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/*
  AUTHENTICATION
  1. With google:
      a. Enable Authentication with google on the firebase dashboard
      b. Set up our provider by creating a new instance of it ==> this allows us to set up firebase to       authenticate with google, i.e a provider is a way to provide Authentication either by google,       github, email etc
      c. create a function that when called starts the authentication process
      d. Try to track Authentication to know when a user logs in or out using AuthStateChanged()
*/

// FireBase does not support arrays a datatype
