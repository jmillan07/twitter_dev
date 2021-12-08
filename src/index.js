import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserProvider from './context/userProvider.jsx'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <UserProvider>
      <App />
      </UserProvider>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
