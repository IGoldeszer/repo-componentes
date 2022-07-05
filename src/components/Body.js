import React, { useEffect, useState } from 'react';
import Item from './Item'
import './style/Body.css';

function Body() {

    const [info, setInfo] = useState()

    useEffect(()=>{
        fetch('data.json') // Trae el response completo
        .then((resp) => resp.json()) // Extrae la información a utilizar del Response
        .then((data) => setInfo(data)) // Setea esa info en nuestro State
    }, [])

    return (
        <section className='cuerpo'>
            <div>
                <h2>Catálogo de productos</h2>
                <p>Elegí alguno de nuestros productos de la lista:</p>
            </div>
            <div className='catalogo'>
                {info && info.map(i => <Item product={i.nombre} price={i.precio} stock={i.stock}/>)}
            </div>
        </section>
    );
}

export default Body;