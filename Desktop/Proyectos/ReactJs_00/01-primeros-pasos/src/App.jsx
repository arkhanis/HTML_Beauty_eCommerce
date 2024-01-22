import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Componente1.jsx";
import Componente1 from "./Componente1.jsx";
import { Componente2 } from "./Componente2.jsx";
import { Componente3 } from "./Componente3.jsx";
import { Componente4 } from "./Componente4.jsx";


function App() {

  const ficha_medica = {
    altura: 1.80,
    grupo: "A+",
    estado: "Sano",
    alergias: "Ninguna"
  }

  return (
    <>
      <Componente4 />
      <br />
      <Componente3 
        nombre= "Cesar" 
        apellidos= "Casanova" 
        ficha= {ficha_medica}
      />

      <br/>
      <Componente2 />
      <br/>
      <Componente1 />
    </>
  );
}

export default App;
