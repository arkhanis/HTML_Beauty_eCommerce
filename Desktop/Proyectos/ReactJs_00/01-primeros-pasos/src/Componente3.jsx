import React from 'react';
import PropTypes from 'prop-types';

export const Componente3 = ({nombre, apellidos, ficha}) => {



  return (
    <div>
        <h1>Componente 3</h1>
        <h2>Comunicación entre componentes</h2>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>

    </div>
  )
}

Componente3.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object.isRequired
}

Componente3.defaultProps = {
    nombre: "Nombre por defecto",
    apellidos: "Apellidos por defecto",
    ficha: {
        altura: 1.80,
        grupo: "A+",
        estado: "Sano",
        alergias: "Ninguna"
    }
}