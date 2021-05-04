import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
        apiKey: "AIzaSyDPsFmDd0z7ypyTqHZzPoCLYsjmYUgTYGA",
        authDomain: "social-media-chat-app-35b26.firebaseapp.com",
        projectId: "social-media-chat-app-35b26",
        storageBucket: "social-media-chat-app-35b26.appspot.com",
        messagingSenderId: "706465101528",
        appId: "1:706465101528:web:d50b71b046264a9d0749ad",
        measurementId: "G-56G5787ZCD"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;