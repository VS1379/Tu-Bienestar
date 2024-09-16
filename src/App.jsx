import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu'; // Main menu component
import Registrarse from './Registrarse'; // register component
import InicioSesion from './InicioSesion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Registrarse" element={<Registrarse />} />
        <Route path="/InicioSesion" element={<InicioSesion />} />
      </Routes>
    </Router>
  );
}

export default App;
