import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7A3-feZrPet_6e7coKe1_B-G_ez6kkvM",
    authDomain: "crwn-db-ff10c.firebaseapp.com",
    databaseURL: "https://crwn-db-ff10c.firebaseio.com",
    projectId: "crwn-db-ff10c",
    storageBucket: "crwn-db-ff10c.appspot.com",
    messagingSenderId: "989137170459",
    appId: "1:989137170459:web:ef525dd7aa8f19f80dc8be"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
