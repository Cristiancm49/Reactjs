import React from 'react';
import { Contacto } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contacto('Example', 'Default description', 'Default description', false)

    return (
        <div>
            <div>
                Contacto:
            </div>
            <ContactComponent Contacto={defaultContact}></ContactComponent>
        </div>
    );
};




export default ContactListComponent;
