import * as firebase from 'firebase/app';

// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAt_5KZyvvo-398XzAwUaEDFJuKly9Z64Q",
    authDomain: "catmash-268eb.firebaseapp.com",
    databaseURL: "https://catmash-268eb.firebaseio.com",
    projectId: "catmash-268eb",
    storageBucket: "catmash-268eb.appspot.com",
    messagingSenderId: "303967734539",
    appId: "1:303967734539:web:d45572345bfa90eacb300e"
    //measurementId: "G-MCNVTNHV4M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore.settings({ timestampsInSnapshots: true });

var db = firebase.firestore();

export default db;

