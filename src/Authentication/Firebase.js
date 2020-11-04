import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyD8LbLq3pzDAWUi8Sqb9PQzho8-qBCp0cs",
    authDomain: "quickstart-1604431413597.firebaseapp.com",
    databaseURL: "https://quickstart-1604431413597.firebaseio.com",
    projectId: "quickstart-1604431413597",
    storageBucket: "quickstart-1604431413597.appspot.com",
    messagingSenderId: "1065573451052",
    appId: "1:1065573451052:web:4dc039114553d628c11889",
    measurementId: "G-46WMYBQKKN"
});

export default app;