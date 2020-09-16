import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCeF0S4Zq7rpYB6AVn3sdWre7_vOdTSY0c",
    authDomain: "test-aa70c.firebaseapp.com",
    databaseURL: "https://test-aa70c.firebaseio.com",
    projectId: "test-aa70c",
    storageBucket: "test-aa70c.appspot.com",
    messagingSenderId: "500407162128",
    appId: "1:500407162128:web:0501982b2ecef12556c195",
    measurementId: "G-7NPRC0M51V"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    console.log(userAuth.uid);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error) {
            console.log('Error creating user: ' + error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;