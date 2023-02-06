import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import './pages/dashboard/Dashboard';





import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/*LOgin */
// { var x=document.getElementById("login");
// var y=document.getElementById("register");
// var z=document.getElementById("btn");

// function register(){
//     x.style.left="-400px";
//     y.style.left="50px";
//     z.style.left="110px";
// }
// function login(){
//     x.style.left="50px";
//     y.style.left="450px";
//     z.style.left="0px";
// }}
// function login12() {
//                 var user11= document.getElementById("user1").value;
//                 var pass11= document.getElementById("pass1").value;
//                         console.log("hiiiii");
//                         console.log(user11);
//                         console.log(pass11);
//                 if(user11=='sai@123')
//                         {
//                             if(pass11=='saimanee')
//                             {
//                                 /*location.replace(""); */
//                             }
//                         }
//          }
/* */