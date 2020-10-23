import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDUNxdVWrxq718N5DGoKCRaQDWlzp2EXw4",
    authDomain: "clone-b224b.firebaseapp.com",
    databaseURL: "https://clone-b224b.firebaseio.com",
    projectId: "clone-b224b",
    storageBucket: "clone-b224b.appspot.com",
    messagingSenderId: "277828207045",
    appId: "1:277828207045:web:eba4f593af55727f150bac",
    measurementId: "G-L8YTCD92ZG"
  };

//const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }