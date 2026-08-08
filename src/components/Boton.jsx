import React from 'react';
import './Boton.css';


function Boton({ children, variante = 'nav', onClick }) {
  return (
    <button className={`boton boton--${variante}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Boton;