import './App.css';
import NavigationBar from './componet/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './componet/Login/Login';
// import UserProfile from './views/UserProfile';
// import EditProfile from './views/EditProfile/EditProfile';
import EditProfile from './views/SocialMedia/profile/EditProfile';
import AddResults from './views/AddResults/AddResults';
import CreatePost from './views/CreatePost/CreatePost';
import ResultLogin from './views/Results/ResultLogin';
import ResultsView from './views/Results/student/ResultsStudentView';
import SocialLogin from './views/SocialMedia/Login/SocialLogin';
import Result from './views/Results/Result';
import SocialHome from './views/SocialMedia/home/UserProfile';
import UserProfile from './views/SocialMedia/profile/UserProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results/login' component={ResultLogin} />
          <Route exact path='/results/view' component={Result} />
          {/* <Route exact path='/login' component={Login} /> */}
          <Route exact path='/social/login' component={SocialLogin} />
          <Route exact path='/social/home' component={SocialHome} />
          <Route exact path='/social/edit-profile' component={EditProfile} />
          <Route exact path='/social/profile' component={UserProfile} />
          <Route exact path='/create-post' component={CreatePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
