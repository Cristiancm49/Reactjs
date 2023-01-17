/**
 * jemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // vamos acrear dos contadores distintos
    // cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // vamos a crear una rferencia con usRf() para asociar una variable
    // con un lemnto de DOM del componente (vusta HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * Trabajando con UseEffect
     */
    /**
     * ? caso 1: Ejecutar SIEMPRE un snippet de codigo
     * cada vez que haya un cambio en el estado dl componente
     * se jcuta aqullo que este dentro del useEffct()
     */


    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrando referencia a elemento del DOM:');
    //     console.log(miRef);
     
    //     })

    /**
     * ? caso 1: Ejecutar SOLO CUANDO CAMBIE EL CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * si se cambia el contador 2< no habra ejecion
     */
    
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR1');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef)
    }, [contador1]);


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef() y useEffct() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/**Elemento refenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            <div>
                <button onClick={incrementar1}> Incrementar contador1</button>
                <button onClick={incrementar2}> Incrementar contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
