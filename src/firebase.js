import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAV1L7zODYYSlS8xZhmuOTqt1a1TNznr2Y',
  authDomain: 'facebook-clone-625f7.firebaseapp.com',
  projectId: 'facebook-clone-625f7',
  storageBucket: 'facebook-clone-625f7.appspot.com',
  messagingSenderId: '701415393086',
  appId: '1:701415393086:web:3ef5a1fc4d027f37420e6f',
  measurementId: 'G-Y43G6H5KK2',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
