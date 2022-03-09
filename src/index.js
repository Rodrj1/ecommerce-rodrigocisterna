import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB0w8veihDI55FXLoZ5htGsEZ3ADJkiQLw",
  authDomain: "ecommerce-cisternarodrigo.firebaseapp.com",
  projectId: "ecommerce-cisternarodrigo",
  storageBucket: "ecommerce-cisternarodrigo.appspot.com",
  messagingSenderId: "1050306869092",
  appId: "1:1050306869092:web:fb827b14b118525c7dac71"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
