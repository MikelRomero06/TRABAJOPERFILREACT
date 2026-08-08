import React from 'react';
import FotoPerfil from './FotoPerfil';
import InformacionPerfil from './InformacionPerfil';
import ListaProyectos from './ListaProyectos';
import './SeccionProyectos.css';

function SeccionProyectos() {
  return (
    <section className="seccion-proyectos">
      <div className="columna-perfil">
        <FotoPerfil />
        <InformacionPerfil />
      </div>

      <ListaProyectos />
    </section>
  );
}

export default SeccionProyectos;