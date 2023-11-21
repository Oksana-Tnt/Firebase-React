import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB4Yqt9h8rlJZ2A9Wr02IMYNHTPfWsdY5o',
  authDomain: 'fir-course-ab004.firebaseapp.com',
  projectId: 'fir-course-ab004',
  storageBucket: 'fir-course-ab004.appspot.com',
  messagingSenderId: '964412285150',
  appId: '1:964412285150:web:91eebe128585de238e224f',
  measurementId: 'G-HC1HHL3ZRP',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
