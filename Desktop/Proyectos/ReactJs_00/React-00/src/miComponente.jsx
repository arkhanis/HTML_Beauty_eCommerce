import React from "react";

const MiComponente = () => {
    
    let usuario = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25
    };

    return (
        <div>
            <h2>Hola Mundo</h2>

            <h3>Nombre: <strong>{usuario.nombre}</strong></h3>
            <h3>Edad: {usuario.edad}</h3>
        </div>
    );
};

export default MiComponente;
