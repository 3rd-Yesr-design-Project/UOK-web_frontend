import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import resultReducer from '../Reducer/resultReducer';
import userReducer from '../Reducer/userReducer';
const initialState = {};

const reducer = combineReducers({
  user: userReducer,
  result: resultReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
