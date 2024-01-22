import React from "react";

export const Componente2 = () => {
  const libros = ["libro1", "libro2", "libro3"];

  return (
    <div className="segundo-componente">
      <h1>Componente 2</h1>
      <h2>Listado de Libros</h2>

      {libros.length >= 1 ? 
      // Si se cumple la condicion haz esto
      
      (<ul>
          {
            libros.map((libro, indice) => {
            return <li key={indice}> {libro} </li>;
            })
          }
      </ul>)

      : (<p>No hay libros</p>)
      
      }
    </div>
  );
};
