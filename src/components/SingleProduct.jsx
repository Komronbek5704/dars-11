import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://headphones-server.onrender.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-product">
            <img src={product.image_url} alt="" />
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
        </div>
    );
}

export default SingleProduct;