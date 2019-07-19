import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyA1ZM8bDy5jZHN3wraXqyHw9tLlW-O8b9s",
    authDomain: "myvue-3aec5.firebaseapp.com",
    databaseURL: "https://myvue-3aec5.firebaseio.com",
    projectId: "myvue-3aec5",
    storageBucket: "myvue-3aec5.appspot.com",
    messagingSenderId: "972339631371",
    appId: "1:972339631371:web:5788301eb84b3176"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;