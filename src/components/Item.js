import React from 'react';
import ItemCount from './ItemCount';
import './style/Item.css';

function Item(props) {
    return (
        <div className='card'>
            <h3 className='titulo'>{props.product}</h3>
            <p>Precio: ${props.price}</p>
            <p>Stock disponible: {props.stock} unidades</p>
            <div className='Comprar'>
                <p>Compre aquí</p>
                <p>Cantidad seleccionada: <ItemCount /></p>
                <br></br>
                <button>Vea detalles del producto</button>
            </div>
        </div>
    );
}

export default Item;