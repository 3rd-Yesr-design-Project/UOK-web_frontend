import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Button from './Button';

firebase.initializeApp({
    apiKey: "AIzaSyDPsFmDd0z7ypyTqHZzPoCLYsjmYUgTYGA",
    authDomain: "social-media-chat-app-35b26.firebaseapp.com",
    projectId: "social-media-chat-app-35b26",
    storageBucket: "social-media-chat-app-35b26.appspot.com",
    messagingSenderId: "706465101528",
    appId: "1:706465101528:web:d50b71b046264a9d0749ad",
    measurementId: "G-56G5787ZCD"
});

const auth = firebase.auth();
// const db = firebase.firestore();
function Chat() {
    const [user, setUser] = useState(()=>auth.currentUser);
    const [initializing, setInitializing] = useState(true);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            if (initializing) {
                setInitializing(false);
            }
        });
        return unsubscribe;
    }, []);
    const signInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.useDeviceLanguage();
        try{
            await auth.signInWithPopup(provider);
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.log(error.message);
        }
    };

    if (initializing) return "Loading...";
    return (
        <div>
            {user ? (
                <>
                <Button onClick={signOut}>Sign out</Button>
                <p>Welcome to the chat</p>
                </>
            ) : (
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
            )}
        </div>
    )
}

export default Chat;