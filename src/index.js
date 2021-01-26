import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App';

// 引入重置样式
import './assets/styles/reset.css'

import {Provider} from "react-redux"
import store from "./home/store/index.js"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

