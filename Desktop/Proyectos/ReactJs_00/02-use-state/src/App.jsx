import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MiPrimerEstado } from './components/MiPrimerEstado.jsx'
import { EjercicioComponent } from './components/EjercicioComponent.jsx'

function App() {
 

  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <>

      <h1>Hook useState</h1>
      <MiPrimerEstado />
      <EjercicioComponent year = {yearActual} />

    </>
  )
}

export default App
