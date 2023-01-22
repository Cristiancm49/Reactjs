/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount (){
        console.log('Comportamiento antes de que el componente se ananido al DOM')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento ante de que l componente sea a;adido al DOM');
    }, [])

    return (
        <div>
            <h1>DidMount</h1>    
        </div>
    );
    
}


