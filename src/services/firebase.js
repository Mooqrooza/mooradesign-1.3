import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const config = {
    apiKey: "AIzaSyCEWTHh3X9E-KZxRM1-NzECg56X4kUXG-E",
    authDomain: "mooradesign-2020.firebaseapp.com",
    databaseURL: "https://mooradesign-2020.firebaseio.com",
    projectId: "mooradesign-2020",
    storageBucket: "mooradesign-2020.appspot.com",
    messagingSenderId: "595555283701",
    appId: "1:595555283701:web:988a50b14ae3354a6d4bbc",
    measurementId: "G-VQ2NFVK2MC"
};
const app = initializeApp(config);
const db = getFirestore(app);

export { db, collection, getDocs, getStorage, ref, getDownloadURL };
