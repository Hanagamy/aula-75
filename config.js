import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB5BmMI0QvEkzarp_M5tjY0bRbKyG5T7xI",
  authDomain: "bribioteka.firebaseapp.com",
  projectId: "bribioteka",
  storageBucket: "bribioteka.appspot.com",
  messagingSenderId: "76810817411",
  appId: "1:76810817411:web:3b8eb61e4bbe76936f70b6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
