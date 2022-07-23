import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/> */

import App from './App';

import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

window.store = store 


ReactDOM.render(
  <Provider store={store}>
  <Router>

   <React.StrictMode>
    <App />
  </React.StrictMode>,
    </Router>
  </Provider>,
  document.getElementById('root')
)
  reportWebVitals();
// ReactDOM.render(
//   <Provider store={store}>
//   <Router>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//   </Router>
//   </Provider>,
//   document.getElementById('root') 
   
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

