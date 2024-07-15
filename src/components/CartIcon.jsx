// src/components/CartIcon.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
    const cart = useSelector(state => state.cart || []);

    return (
        <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={24} />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
    );
}

export default CartIcon;