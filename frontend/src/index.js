import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import Dashboard from './components/Dashboard/dashboard';
import Sidebar from './components/Sidebar/sidebar';
import reportWebVitals from './reportWebVitals';

import './style/reset.css'
import './style/main.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Sidebar />
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
