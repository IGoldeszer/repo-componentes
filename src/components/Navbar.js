import React from 'react';
import './style/Navbar.css';
import CartWidget from './CartWidget';

function Navbar() {
    return <>
        <header className="navbar">
            <button>Home</button>
            <p>Nosotros</p>
            <a src="#">Tienda</a>
            <CartWidget />

        </header>
    </>;
}

export default Navbar;