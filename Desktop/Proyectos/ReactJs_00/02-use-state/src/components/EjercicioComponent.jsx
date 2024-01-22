import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EjercicioComponent = ({ year }) => {

  const [YearNow, setYearNow] = useState(year);

  const siguiente = () => {
    setYearNow(YearNow + 1);
  }

  const anterior = () => {
    setYearNow(YearNow - 1);
  }

  const cambiarYear = (e) => {

    let dato = parseInt(e.target.value);

    if (Number.isInteger(dato)) {
      setYearNow(dato);
    } else {
      setYearNow(year);
    }
  } 

  return (

    <div>
      <h2>Ejercicio con evento y useState</h2>
      <strong>
        {YearNow}
      </strong>

      <p>
        <button onClick={siguiente}>Siguiente</button>
        <button onClick={anterior}>Anterior</button>
      </p>

      <p>
        Cambiar año:
        <input
          onChange={cambiarYear}
          type="text"
          placeholder='Cambiar el año' />
      </p>

    </div>
  )
}

EjercicioComponent.propTypes = {
  year: PropTypes.number.isRequired
}
