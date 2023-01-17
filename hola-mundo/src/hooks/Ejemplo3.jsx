/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 * 
 */


import React, {useState, useContext} from 'react';


/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)


const Componente1 = () => {
    
    // Inicializamos un estado vacio que va a rellenarse con los
    // datos del contexto del padre

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                el toker es: { state.token }
            </h1>
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {
    
 // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                La sesion es: { state.sesion }
            </h1>
        </div>
    );
}

export default function MiComponeteConContexto(){

    const estadoInicial = {
        token: '12334',
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData({
            token: '45676555',
            sesion: sessionData.sesion + 1
            
        });
    }
    return(
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que este aqui dentro puede leer los datos de sessuionData
            ademas, si se actualiza, los componentes de aqui, tambien lo actualizan */}
            <h1>*** Ejemplo de useState y useContext ***</h1>
            {/* Pintamos el componente 1 */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}> Actualizar </button>
        </miContexto.Provider>
    )
}