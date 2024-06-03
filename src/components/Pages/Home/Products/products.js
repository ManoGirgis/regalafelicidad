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
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Products</h2>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {products.map(product => (
                                <Card
                                    onClick={() => setSelectedProdId(product.id)}
                                    key={product.id}
                                    id={product.id}
                                    title={product.name}
                                    button="Add to cart"
                                    text={product.price}
                                    image={prodimg}
                                    imageAlt="Product-image"
                                    item="Product"
                                    click={setprod}
                                >
                                    <FaCartPlus />
                                </Card>

                            ))}
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default Products;


