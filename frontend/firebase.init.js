
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyApGt3vvtC4ylhfDpWuFEpxkqDk0K2iOSo",
    authDomain: "twitter-app-40660.firebaseapp.com",
    projectId: "twitter-app-40660",
    storageBucket: "twitter-app-40660.appspot.com",
    messagingSenderId: "326452932967",
    appId: "1:326452932967:web:613fbc9011326f73a17fc2",
    measurementId: "G-FNPFSC9G7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth