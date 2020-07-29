import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../src/Style/index.scss';
import '../src/Style/Navigation.scss';
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css';

var config = {
    apiKey: "AIzaSyDeGkYFkJDXRPpet7NICfymL1ZBslfSut8",
    authDomain: "provotype1.firebaseapp.com",
    databaseURL: "https://provotype1.firebaseio.com",
    projectId: "provotype1",
    storageBucket: "provotype1.appspot.com",
    messagingSenderId: "79384372506",
    appId: "1:79384372506:web:6bdf22989f57efefb8f8a3",
    measurementId: "G-MT9HEW32K8"
  };

firebase.initializeApp(config)

ReactDOM.render(
        <App />
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
