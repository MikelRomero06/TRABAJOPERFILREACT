import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import SeccionProyectos from './components/SeccionProyectos';
import PiePagina from './components/PiePagina';
import './App.css';

function App() {
  return (
    <div className="portafolio">
      <BarraNavegacion />
      <SeccionProyectos />
      <PiePagina />
    </div>
    //
  );
}

export default App;
