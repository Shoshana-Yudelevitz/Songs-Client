import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './login';
import Regist from './regist';
import Home from './home';
import Songs from './songs';
import Singlers from './singlers';
import Aaa from './aaa';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Regist/> */}
    {/* <Login/> */}
    <App />
    {/* <Home/> */}
    {/* <Songs/> */}
    {/* <Singlers/> */}
    <Aaa/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
