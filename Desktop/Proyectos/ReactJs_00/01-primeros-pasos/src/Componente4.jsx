import React from 'react'


export const Componente4 = () => {

    const hasDadoClick = () => {
        alert('Has dado click en el botón');
    }

    const hasDadoDobleClick = () => {
        alert('Has dado doble click en el botón');
    }

    const hasEntrado = () => {
        alert('Has entrado en la caja');
    }

    const hasSalido = () => {
        alert('Has salido de la caja');
    }

    const estasDentro = () => {
        console.log('Estás dentro del input');
    }

    const estasFuera = () => {
        console.log('Estás fuera del input');
    }

    return (
        <div>
            <h1>Componente 4</h1>
            <h2>Eventos en React</h2>

            {/* Evento Click */}
            <p>
                <button onClick={hasDadoClick} > Dame Click </button>
            </p>

            {/* Evento dobleclick */}
            <p>
                <button onDoubleClick={hasDadoDobleClick} > Dame Doble Click </button>
            </p>

            {/* Evento onMouseLeave */}
            <div id="caja"
                onMouseEnter={hasEntrado}
                onMouseLeave={hasSalido}
            > Pasa por encima!
            </div>

            {/* Evento onFocus & onBlur */}
            <p>
            <input type="text" 
                onFocus={ estasDentro } 
                onBlur= { estasFuera }
            placeholder='Introduce tu nombre...'/>
            </p>

        </div>
    )
}
