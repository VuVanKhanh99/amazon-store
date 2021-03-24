import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCS79t2B68VE41sCKomwSTA51JBKg8OCsU",
  authDomain: "clone-150d2.firebaseapp.com",
  projectId: "clone-150d2",
  storageBucket: "clone-150d2.appspot.com",
  messagingSenderId: "188769924220",
  appId: "1:188769924220:web:9f320811aebca154ec85f9",
  measurementId: "G-ZLKE81RGLH"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};