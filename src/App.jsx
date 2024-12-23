import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Home from './components/home';



const App = () => {
  const [] = useState(null);

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <home/>
        <div className="flex-1 text-white">
          <Header />
        
        </div>
        <Home/>
      </div>
    </Router>
  );
};

export default App;
