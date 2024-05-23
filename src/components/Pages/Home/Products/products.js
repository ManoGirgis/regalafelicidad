import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
            const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;
            const storeUrl = process.env.REACT_APP_WC_STORE_URL;
            console.log(consumerKey, consumerSecret, storeUrl)
            const url = `${storeUrl}/wp-json/wc/v3/products?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

            try {
                const response = await axios.get(url);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
