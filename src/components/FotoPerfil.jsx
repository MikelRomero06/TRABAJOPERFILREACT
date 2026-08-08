import React from 'react';
import './FotoPerfil.css';


function FotoPerfil({ variante = 'decorativa' }) {
  return (
    <div className={`contenedor-foto contenedor-foto--${variante}`}>
      {variante === 'decorativa' && (
        <>
          <div className="figura-fondo figura-superior"></div>
          <div className="figura-fondo figura-inferior"></div>
        </>
      )}
      {variante === 'simple' && <div className="anillo-simple"></div>}

      <div className="figura-principal">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDN8fHB1Z3xlbnwwfHx8fDE3ODU4MjA4MTh8MA&ixlib=rb-4.1.0&q=85&fmt=jpg&w=450"
          alt="Foto de perfil de Mikel Romero (mi perro)"
        />
      </div>
    </div>
  );
}

export default FotoPerfil;