import React, { useEffect, useState } from "react";
import { AvisoComponent } from "./AvisoComponent";

export const PruebasComponents = () => {

  const [ usuario, setUsuario ] = useState("Cesar Casanova");
  const [ fecha, setFecha ] = useState("2021-09-01");
  const [ contador, setContador ] = useState(0);

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = () => {
    setFecha(new Date().toLocaleDateString());
  }

  // Si dejo el [] vacio, solo se ejecuta una vez
  useEffect(() => {
    console.log("El componente se ha cargado");
  }, []);

    // Se ejecuta solo si cambio el usuario
    useEffect(() => {

      setContador(contador + 1);
      console.log("El usuario se ha cambiado " + contador);

    }, [usuario]);


  return (
    <div>

      <h1>El efecto - Use Effect</h1>
      <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
      <strong>{fecha}</strong>

      <p>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />

        <button onClick={ cambiarFecha }>Cambiar fecha</button>
      </p>


      { usuario == "Victor" && <AvisoComponent /> }

    </div>
  );
};
