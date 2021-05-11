import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import './index.css';
import './assets/main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyC8qUhD8FtqEtpugwwnENSu552lDlfAztY',
  authDomain: 'social-media-c89da.firebaseapp.com',
  databaseURL: 'https://social-media-c89da-default-rtdb.firebaseio.com',
  projectId: 'social-media-c89da',
  storageBucket: 'social-media-c89da.appspot.com',
  messagingSenderId: '603423739288',
  appId: '1:603423739288:web:c209e235a970e615496fed',
  measurementId: 'G-GQ7S729HWH',
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
