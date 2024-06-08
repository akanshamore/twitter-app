import React from 'react';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Login/SignUp';



function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
