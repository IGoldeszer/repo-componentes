import React from 'react';
import './style/Welcome.css';

function Welcome( {name} ) {
    return (
        <h2 class="welcome">Bienvenido a nuestra página {name}</h2>
    );
}

export default Welcome;