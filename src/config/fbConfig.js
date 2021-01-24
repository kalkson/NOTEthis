import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBp98ep4VNrBIZJLl5JjAImiHDehOaRJ1I',
  authDomain: 'notethis-d1f1b.firebaseapp.com',
  projectId: 'notethis-d1f1b',
  storageBucket: 'notethis-d1f1b.appspot.com',
  messagingSenderId: '50620521463',
  appId: '1:50620521463:web:0bf88513739b2715c9acf2',
};

firebase.initializeApp(firebaseConfig);

export default firebaseConfig;
