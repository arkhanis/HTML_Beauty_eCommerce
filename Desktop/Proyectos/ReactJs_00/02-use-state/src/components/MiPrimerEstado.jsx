import React, {useState} from "react";

export const MiPrimerEstado = () => {
    
    /*
    Problematica:
    
    let nombre = "Juan";
    
    const cambiarNombre = () => {
        nombre = "Pedro";
    };
    */

    const [nombre, setNombre] = useState("Juan");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

    return (
        <div>
            <h3>Componente: MiPrimerEstado</h3>
            <h4>
                {nombre}
            </h4>

            {/* Efecto onClick  */}
            <button onClick={ e => cambiarNombre (e, "Francisco") } >Cambiar nombre por Francisco </button>
            {/* Efecto onChange para que tome la variable del campo input  */}
            <input type="text" onChange={ e => cambiarNombre (e, e.target.value)} placeholder="Cambia el nombre"/>

        </div>
    );
};


