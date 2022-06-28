import React from 'react';
import './style/Body.css';
import Card from './Card'

function Body({children}) {
    return (
        <section className='cuerpo'>
            <h2>Catálogo de productos</h2>
            <p>Elegí tus productos de esta lista:</p>
        </section>

        // // <section>
        // //     {children}
        // //     <Card product='Mesa' price='$1000' img=''/>
        // //     <Card product='Silla' price='$200'/>
        // //     <Card product='' price=''/>
        // //     <Card product='' price=''/>
        // // </section>
    );
}

export default Body;