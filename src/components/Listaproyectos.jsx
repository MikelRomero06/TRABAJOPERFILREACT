import React from 'react';
import Proyecto from './Proyecto';
import './ListaProyectos.css';

const proyectos = [
  {
    categoria: 'SISTEMAS AUTOMATIZADOS (EQUIPO)',
    nombre: 'CASA INTELIGENTE',
    aporte: 'INTERFAZ GRÁFICA Y PORTÓN AUTOMÁTICO',
  },
  {
    categoria: 'IMPLEMENTACIÓN DE SISTEMAS DE SOFTWARE (EQUIPO)',
    nombre: 'SISTEMA DE PRACTICA',
    aporte: 'DOCUMENTACIÓN Y MANUAL DE USUARIO',
  },
  {
    categoria: 'MICROCONTROLADORES (EQUIPO)',
    nombre: 'CIRCUITO PARA AIRE ACONDICIONADO',
    aporte: 'SOLDAR',
  },
  {
    categoria: 'DESARROLLO DE PORTALES WEB I (EQUIPO)',
    nombre: 'SISTEMA DE GESTIÓN DE CLASES',
    aporte: 'BACKEND, RUTAS',
  },
];

function ListaProyectos() {
  return (
    <div className="lista-proyectos">
      <h2>MIS PROYECTOS</h2>
      <ul>
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.nombre} {...proyecto} />
        ))}
      </ul>
    </div>
  );
}

export default ListaProyectos;