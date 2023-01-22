/**
 * Ejemplo de unso de matodo componentDidUpdate en componente de clase
 * y uso de hook en componete funcional
 */


import React, { Component } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado')
    }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}



const DidUpdateHook = () => {
    return (
        <div>
            
        </div>
    );
}



