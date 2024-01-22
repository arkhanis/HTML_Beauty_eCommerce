import React, { useEffect } from "react";

export const AvisoComponent = () => {
    
    useEffect(() => {
        
        // cuando el componente se monta
        alert("El componente se ha montado")

        // cuando el componente se desmonta
        return () => {
            alert("El componente se ha desmontado")
        }
    }, []); // se ejecuta una vez porque le paso el array vacio


    
    return (
    <div>
        <hr />
        <h3>Saludos Victor! que tal estas?</h3>
        <button onClick={ e => {
            alert("Bienvenido!");
        }}>Mostrar alerta</button>
    </div>
)};
