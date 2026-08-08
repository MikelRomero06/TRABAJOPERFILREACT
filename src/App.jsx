import React from 'react';
import BarraNavegacion from './components/BarraNavegacion';
import SeccionPrincipal from './components/SeccionPrincipal';
import PiePagina from './components/PiePagina';
import './App.css';

function App() {
  return (
    <div className="portafolio">
      <BarraNavegacion />
      <SeccionPrincipal />
      <PiePagina />
    </div>
  );
}

export default App;