
import React from "react";
import PropTypes from 'prop-types';
import { Contacto } from "../../models/contact.class";


const ContactComponent = ({ Contacto }) => {
    return (
        <div>
            <h2>
                nombre: { Contacto.nombre }
            </h2>
            <h2>
                Apellido: { Contacto.apellido }
            </h2> 
            <h3>
                email: { Contacto.email }
            </h3> 
            <h5>
                Estado: { Contacto.conectado ? 'Contacto En Línea': 'Contacto No Disponible' }
            </h5> 
        </div>
    );
};
ContactComponent.propTypes = {
    contact: PropTypes.instanceOf( Contacto ) 
};


export default ContactComponent;