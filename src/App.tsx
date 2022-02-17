import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
