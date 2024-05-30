import React, { useEffect, useState } from 'react';
import Card from '../../../Common/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import Showprod from './showprod';
import prodimg from '../../../../Images/prodimg.png';
import { FaCartPlus } from "react-icons/fa";

let x = 0;
const Products = () => {

    const { data: products, loading, error } = WoocommerceConnection('products');
    const [selectedProdId, setSelectedProdId] = useState();
    const [imagen, setimagen] = useState(prodimg);

    useEffect(() => {
        // if (product.images[0].src) {
        //     console.log(product.images[0]);
        //     setimagen(product.images[0]);
        // }
    }, [x]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const setprod = (id) => {
        setSelectedProdId(id);
        x++;
    }

    return (
        <div>
            {selectedProdId ? (
                <Showprod id={selectedProdId} />
            ) : <>
                <h1>Products</h1>
                <div className='card-place-holder'>
                    {products.map(product => (
                        <Card
                            onClick={() => setSelectedProdId(product.id)}
                            key={product.id}
                            id={product.id}
                            title={product.name}
                            button="Add to cart"
                            text={product.price}
                            image={prodimg}
                            item="Product"
                            click={setprod}
                        >
                            <FaCartPlus />
                        </Card>

                    ))}
                </div>
            </>
            }
        </div>
    );
};

export default Products;


