import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Components/Home/home';

// using animation
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  duration: 800, // Animation speed (in ms)
  once: true,    // Animate only once when scrolling
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
