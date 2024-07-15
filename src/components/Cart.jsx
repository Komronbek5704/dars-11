import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';

function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                <div  className='card-item'>
                        <div key={item.id} className="cart-div">
                            <img src={item.image_url} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.price}$</p>
                            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </div>
               </div>
                    
                ))
            )}
        </div>
    );
}

export default Cart;