import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../../Common/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';

const Products = () => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     setProducts(WoocommerceConnection('products', ''))
    // }, [])
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
            <div className='card-place-holder'>
                {products.map(product => (
                    <>
                        {/* {product.images.src}*/}  {product.images.src}
                        < Card id={product.id} title={product.name} button="Add to cart" text={product.price}></Card>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Products;
