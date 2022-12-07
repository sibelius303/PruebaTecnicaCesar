import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './componentes/Navbar';
import FormHabilidades from './page/FormHabilidades';
import FormRegistro from './page/FormRegistro';
import Home from './page/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route element={<Home/>} path="/" />
            <Route element={<FormRegistro/>} path="/registro" />
            <Route element={<FormHabilidades />} path="/skils" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
