import React from 'react'
import './App.css';
import Navbar from './components/navbar/navbar.js';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
