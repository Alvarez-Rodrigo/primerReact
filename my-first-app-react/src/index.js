import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJQrX7oI4-HsVzIK_4bTggK-jOFKp0-Q",
  authDomain: "coderhouse-ecommer.firebaseapp.com",
  projectId: "coderhouse-ecommer",
  storageBucket: "coderhouse-ecommer.appspot.com",
  messagingSenderId: "738306003891",
  appId: "1:738306003891:web:e375ee5803e29ff6edb1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//import {BrowserRouter, Route, Routers} from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
