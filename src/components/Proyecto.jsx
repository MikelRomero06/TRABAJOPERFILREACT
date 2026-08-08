import React from 'react';
import './Proyecto.css';


function Proyecto({ categoria, nombre, aporte }) {
  return (
    <li className="proyecto">
      <p className="proyecto-categoria">{categoria}:</p>
      <p className="proyecto-detalle">
        {nombre} (APORTE): {aporte}
      </p>
    </li>
  );
}

export default Proyecto;