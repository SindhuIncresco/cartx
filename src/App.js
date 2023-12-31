

import React from 'react';
import './App.css';
import './fonts.css'
import { GoogleFontLoader } from 'react-google-font-loader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  return (
    <Router>
      <div className="body" style={{ backgroundColor: 'var(--custom-background-color)' }} >
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
