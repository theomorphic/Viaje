import React from 'react';

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home"
import Services from "./components/pages/Services"
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Company from './components/pages/Company'



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />} />
          <Route path='/company' exact element={ <Company />} />
          <Route path='/services' exact element={ <Services />} />
          <Route path='/products' exact element={ <Products />} />
          <Route path='/sign-up' exact element={ <SignUp />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
