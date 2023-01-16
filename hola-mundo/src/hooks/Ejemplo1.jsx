/**
 * Ejemplo de uso de Hook useStete
 * 
 * Crear un componente de tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas, podrer modificarlo
 */

import React, { useState } from 'react';


const Ejemplo1 = () => {
    // Valor uniciar para un contador

    const valorInicial = 0

    // Valor uniciar para un contador

    const personaInicial = {

        nombre : "martin",
        email : "ccortesm200@gmail.com"

    }

    /**
     * Queremos que el VALORINICAL y PERSONANINCIAL sean 
     * parte del estado del componente para aso poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * cont [nombreVariable, funcionParaCambiae] = useState(valorIncial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        setContador(contador+1)
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona({
            nombre: 'pepe',
            email: 'pepe@gmail.com'
        })
    }

    return (
        <div>
            <h1>Ejemplo de use useState</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h3>EMAIL: {persona.email}</h3>
            <button onClick={incrementarContador}>Incrmentar contador</button>
            <button onClick={actualizarPersona}>Actualizar datos</button>
        </div>
    );
}

export default Ejemplo1;
