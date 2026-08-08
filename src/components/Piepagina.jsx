import React from 'react';
import Boton from './Boton';
import EnlaceSocial from './EnlaceSocial';
import './PiePagina.css';

const redesSociales = [
  {
    nombre: 'Instagram',
    href: 'https://instagram.com',
    icono:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytwi0ehEHtu-9_ZWm0ZwLuyBPMORvObcnmthkGJPafw&s=10',
  },
  {
    nombre: 'Facebook',
    href: 'https://facebook.com',
    icono: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png',
  },
  {
    nombre: 'X (Twitter)',
    href: 'https://x.com',
    icono:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/X_icon.svg/960px-X_icon.svg.png',
  },
];

function PiePagina() {
  return (
    <footer className="pie-pagina">
      <div className="pie-izquierdo">
        <span>Solo es un perro</span>
        <div className="enlaces-sociales">
          {redesSociales.map((red) => (
            <EnlaceSocial key={red.nombre} {...red} />
          ))}
        </div>
      </div>

      <Boton variante="info">MAS INFORMACIÓN</Boton>
    </footer>
  );
}

export default PiePagina;