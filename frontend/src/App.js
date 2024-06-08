import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
