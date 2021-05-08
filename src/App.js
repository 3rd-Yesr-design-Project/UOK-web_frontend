import './App.css';
import React, { useEffect, useState } from 'react';
import NavigationBar from './componet/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './componet/Login/Login';
// import UserProfile from './views/UserProfile';
// import EditProfile from './views/EditProfile/EditProfile';
import AddResults from './views/AddResults/AddResults';
import ResultLogin from './views/Results/ResultLogin';
import ResultsView from './views/Results/student/ResultsStudentView';
import SocialLogin from './views/SocialMedia/Login/SocialLogin';
import Result from './views/Results/Result';
import SocialHome from './views/SocialMedia/home/SocialHome';
import UserProfile from './views/SocialMedia/profile/UserProfile';
import About from './componet/socialMedia/profile/about/About';
import ResetPassword from './componet/common/ResetPassword';
import DashboardComponent from './views/SocialMedia/Chat/Dashboard/dashboard';
import SignupComponent from './views/SocialMedia/Chat/Signup/signup';
import LoginComponent from './views/SocialMedia/Chat/Login/login';
import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {
  const [state, setState] = useState({
    socialUser: null,
  });
  useEffect(() => {
    fireBaseInitialize();
  }, []);
  const db = firebase.firestore();
  const fireBaseInitialize = () => {
    if (!firebase?.apps?.length) {
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
    } else {
      firebase.app(); // if already initialized, use that one
    }
  };

  const loggedIn = (user) => setState({ socialUser: user });

  return (
    <div>
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Switch>
          <Route exact path='/dashboard' component={DashboardComponent} />

          <Route
            exact
            path='/signup'
            loginFn={loggedIn}
            component={SignupComponent}
          />

          <Route exact path='/login' component={LoginComponent} />
          <Route exact path='/' component={Home} />
          <Route exact path='/results/login' component={ResultLogin} />
          <Route exact path='/results/view' component={Result} />
          {/* <Route exact path='/login' component={Login} /> */}
          <Route exact path='/social/login' component={SocialLogin} />
          <Route exact path='/social/home' component={SocialHome} />
          {/* <Route exact path='/social/edit-profile' component={EditProfile} /> */}
          <Route
            exact
            path='/social/profile/home/:userId'
            component={UserProfile}
          />
          {/* <Route exact path='/create-post' component={CreatePost} /> */}
          <Route exact path='/social/profile/about' component={About} />
          <Route exact path='/resetPassword/:id' component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
