import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import resultReducer from '../Reducer/resultReducer';
import userReducer from '../Reducer/userReducer';
import subjectReducer from '../Reducer/subjectReducer';
import studentReducer from '../Reducer/studentReducer';
import profileReducer from '../Reducer/profileReducer';
import postReducer from '../Reducer/postReducer';
import searchReducer from '../Reducer/searchReducer';
import friendReducer from '../Reducer/friendReducer';
import fredReducer from '../Reducer/fredReducer';
const initialState = {};

const reducer = combineReducers({
  user: userReducer,
  result: resultReducer,
  subject: subjectReducer,
  student: studentReducer,
  profile: profileReducer,
  post: postReducer,
  searchFriend: searchReducer,
  friendReq: friendReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
