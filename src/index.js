import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store/Store';
import './index.css';
import './assets/main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);
