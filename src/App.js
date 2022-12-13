import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './componentes/Navbar';
import { AppProvider } from './Contex/AppProvider';
import FormHabilidades from './page/FormHabilidades';
import FormRegistro from './page/FormRegistro';
import Home from './page/Home';
import Perfil from './page/Perfil';


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Navbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<FormRegistro />} path="/registro" />
            <Route element={<FormHabilidades />} path="/skills" />
            <Route element={<Perfil />} path="/perfil" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};


export default App;
