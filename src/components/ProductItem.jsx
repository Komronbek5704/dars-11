import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions';

function ProductItem({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-item">
            <Link to={`/product/${product.id}`}>
            <img className='product-image' src={product.image_url} alt="" />
           
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            </Link>
             <p>Total Price:{product.price}$</p>
            <button onClick={handleAddToCart}>Add to Cart</button>

        </div>
    );
}

export default ProductItem;