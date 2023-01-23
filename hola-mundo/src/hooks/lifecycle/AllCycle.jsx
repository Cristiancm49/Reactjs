import React, { useEffect } from 'react';

const AllCycle = () => {

    useEffect(() => {
        console.log('Componente actualizado')
        return () => {
            console.log('Componente va a desaparecer')
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
