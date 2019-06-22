import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
//use an alias to make it a shorter name (as)
import { BrowserRouter as Router } from "react-router-dom";


render(
  <Router>
    <App /> 
  </Router>,
  document.getElementById("root")
);