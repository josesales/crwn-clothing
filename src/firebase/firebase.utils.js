import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWhYmkFtsB6ruOwppgRgCobuDygh963_o",
    authDomain: "crwn-db-786ae.firebaseapp.com",
    databaseURL: "https://crwn-db-786ae.firebaseio.com",
    projectId: "crwn-db-786ae",
    storageBucket: "crwn-db-786ae.appspot.com",
    messagingSenderId: "841808978001",
    appId: "1:841808978001:web:997538d26a84620c681870",
    measurementId: "G-B5K42BJ3YJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;