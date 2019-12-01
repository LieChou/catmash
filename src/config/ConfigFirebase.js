import * as firebase from 'firebase/app';

// Required for side-effects
require("firebase/firestore");

// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxjn9u2z_D0bDdXu9sQKMbHGDwLp_1CiI",
    authDomain: "atelier-catmash-beeef.firebaseapp.com",
    databaseURL: "https://atelier-catmash-beeef.firebaseio.com",
    projectId: "atelier-catmash-beeef",
    storageBucket: "atelier-catmash-beeef.appspot.com",
    messagingSenderId: "400822330359",
    appId: "1:400822330359:web:cd398c4381560337ad04f2",
    measurementId: "G-MCNVTNHV4M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// firebase.firestore.settings({ timestampsInSnapshots: true });

var db = firebase.firestore();

export default db;