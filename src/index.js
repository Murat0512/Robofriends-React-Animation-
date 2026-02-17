import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; 
import App from './App';

// We need to import tachyons in this file to use the tachyons classes in our project.
//  We can also import it in the Card.js file but it's better to import it in the index.js file because it's 
// the entry point of our project and we can use it in all the components.

 
// We need to import the Robots component in this file to use it in our project. 
// We can also import it in the Card.js file but it's better to import it in the index.js file 
// because it's the entry point of our project and we can use it in all the components.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
