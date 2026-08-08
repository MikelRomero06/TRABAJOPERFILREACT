import React from 'react';
import Boton from './Boton';
import './BarraNavegacion.css';

const enlaces = ['SOBRE MI', 'INFORMACIÓN', 'CONTACTAR'];

function BarraNavegacion() {
  return (
    <nav className="barra-navegacion">
      <img
        src="https://plus.unsplash.com/premium_photo-1711664260571-89851270a90d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDk3fHx0ZWNobm9sb2d5fGVufDB8fHx8MTc4NTgyMDg3MXww&ixlib=rb-4.1.0&q=85&fmt=jpg&w=450"
        alt="Logo de Mikel Romero"
        className="logotipo"
      />
      <div className="enlaces-navegacion">
        {enlaces.map((texto) => (
          <Boton key={texto} variante="nav">
            {texto}
          </Boton>
        ))}
      </div>
    </nav>
  );
}

export default BarraNavegacion;