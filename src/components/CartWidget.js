import React from 'react';
import './style/CartWidget.css';

function CartWidget () {
    return (
        <div className="cart">
            <p>0</p>
            <img className="cartSize" src="https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png" alt=""/>
        </div>
    );
};

export default CartWidget;