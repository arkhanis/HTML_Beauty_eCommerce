import React from "react";

const Componente1 = () => {
    
    let usuario = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25
    };

    return (
        <div>
            <h1>Componente 1</h1>
            <h2>Utilizando objetos</h2>

            <h3>Nombre: <strong>{usuario.nombre}</strong></h3>
            <h3>Edad: {usuario.edad}</h3>
        </div>
    );
};

export default Componente1;
