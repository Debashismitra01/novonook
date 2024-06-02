import './App.css';
import React from'react';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/admin/admin';
import Blog from './components/blog/blog ';


function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/admin" element={<Admin />} />
    </Routes>
    <Blog />
    </div>
  );
}

export default App;
