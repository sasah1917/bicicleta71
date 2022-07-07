import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
 
    apiKey: "AIzaSyA5JI5mmw1REV7qvz68k7B2rKmcFNRkuCk",
    authDomain: "bicicleta-d5d93.firebaseapp.com",
    projectId: "bicicleta-d5d93",
    storageBucket: "bicicleta-d5d93.appspot.com",
    messagingSenderId: "1036652563060",
    appId: "1:1036652563060:web:b4d3d019342f34e6b45f21"

  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
