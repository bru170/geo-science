import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1bmFq70QxDrK_yHpL34jONGF6tK5CRrw',
  authDomain: 'flors-geoblog.firebaseapp.com',
  projectId: 'flors-geoblog',
  storageBucket: 'flors-geoblog.appspot.com',
  messagingSenderId: '126449764487',
  appId: '1:126449764487:web:058daa9e74efba5dc91022',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
