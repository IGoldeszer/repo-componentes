import React from 'react';
import './style/ItemDetailContainer.css';

function ItemDetailContainer( {name} ) {
    return (
        <h1 class="ItemDetailContainer">Bienvenidos a nuestra página {name}</h1>
    );
}

export default ItemDetailContainer;