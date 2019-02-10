const firebase = require('firebase/app')
require('firebase/firestore')
require('firebase/storage')

// Firebase configuration
var config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID
};

// Firebase initialization
const app = firebase.initializeApp(config);

const firestore = app.firestore();
const storage = app.storage();

module.exports = {
  firestore,
  storage,
  firebase
}