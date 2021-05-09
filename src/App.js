import './App.css';
import React, { useEffect } from 'react';
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
import { getAllUsers } from './Action/userActions';
import userServices from './services/UserServices';
import { connect } from 'react-redux';
import { getLoginUser } from './Action/userActions';

const App = ({ getLoginUser }) => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const user = await userServices.fetchLoginUser();
      getLoginUser(user.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Switch>
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
          <Route exact path='/social/profile/about/:userId' component={About} />
          <Route exact path='/resetPassword/:id' component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, { getLoginUser })(App);
