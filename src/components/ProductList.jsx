import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions';
import ProductItem from './ProductItem';
import Filter from './Filter';

function ProductList() {
    const dispatch = useDispatch();
    const { products, filter } = useSelector(state => state.products);

    useEffect(() => {
        fetch('https://headphones-server.onrender.com/products')
            .then(response => response.json())
            .then(data => {
                dispatch(setProducts(data));
            });
    }, [dispatch]);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase()) || 
        product.color.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Filter />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;