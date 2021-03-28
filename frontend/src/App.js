import './App.css';
import NavigationBar from './componet/NavBar';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './views/Home/Home';
import Login from './componet/Login/Login';
import UserProfile from './views/UserProfile';
import EditProfile from './views/EditProfile/EditProfile';
import AddResults from './views/AddResults/AddResults';
import CreatePost from './views/CreatePost/CreatePost';
import ResultLogin from './views/Results/ResultLogin';
import ResultsView from './views/Results/Results';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/results/login' component={ResultLogin} />
          <Route exact path='/results/view' component={ResultsView}/>
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={UserProfile} />
          <Route exact path='/Edit-profile' component={EditProfile} />
          <Route exact path='/Add-Results' component={AddResults} />
          <Route exact path='/create-post' component={CreatePost} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
