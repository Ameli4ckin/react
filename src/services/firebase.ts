import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    getAuth, 
    signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBOZ5EsDzGBfuFhFX7Q5yQvpu7VtJ8CcxQ",
    authDomain: "react-gb-d6202.firebaseapp.com",
    databaseURL: "https://react-gb-d6202-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-gb-d6202",
    storageBucket: "react-gb-d6202.appspot.com",
    messagingSenderId: "256333518673",
    appId: "1:256333518673:web:df0ee98167416cbf80a570"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) => 
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) => 
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

export const db = getDatabase(app);

export const getChats = () => ref(db, 'chats');

