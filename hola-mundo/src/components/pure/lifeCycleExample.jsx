// Ejemplo de componente de tipo clase que diospone de los 
// metodos de ciclo de vida

import React, { Componet } from "react"
import PropTypes from 'prop-types'

class lifeCycleExample extends Componet {

    constructor(props){
        super(props)
        console.log('Constructor: Cuando se instancia el component');
    }
    
    ComponetWillMount() {
        console.log('WillMount: Ants del montaje del componente');
    }

    ComponetDidMount() {
        console.log('DidMount: Justo al acabar el montaje del component, antes de montarlo');
    }

    ComponetWillReceiveProps(nextProps) {
        console.log('ComponetWillReceiveProps: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextSate) {
        // 
        //  Controla si el component debe o no actualizarse
        // return true o false
    }

    ComponetWillUpdat(prevProps, prevState) {
        console.log('ComponetWillUpdat: CJusto antes de actualizarse');
    }

    ComponetDidUpdate(prevProps, prevState) {
        console.log('ComponetDidUpdate: Justo despues de actualizarse');
    }

    ComponetWillUnmount() {
        console.log('ComponetWillUnmount: Justo antes de desaparecer');
    }

    reder() {
        return(
            <div>

            </div>
        )

        
    }
}