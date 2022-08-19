import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='/movie/:id' element={<h2>Movie detaile Element</h2>}></Route>
          <Route path='/movie/:type' element={<h2>Movie List Pages</h2>}></Route>
          <Route path='/*' element={<h2>Error page</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
