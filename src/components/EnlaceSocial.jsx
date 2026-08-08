import React from 'react';
import './EnlaceSocial.css';

function EnlaceSocial({ href, nombre, icono }) {
  return (
    <a href={href} className="boton-social" aria-label={nombre}>
      <img src={icono} alt={`Logo de ${nombre}`} />
    </a>
  );
}

export default EnlaceSocial;