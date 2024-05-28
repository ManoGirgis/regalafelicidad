import React, { useEffect, useState } from 'react';
import Card from '../../../Common/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import Showprod from './showprod';
import prodimg from '../../../../Images/prodimg.png';

let x = 0;
const Products = () => {
    // Utiliza el hook de tu conexión personalizada
    const { data: products, loading, error } = WoocommerceConnection('products');
    const [selectedProdId, setSelectedProdId] = useState(null);
    const [imagen, setimagen] = useState(prodimg);
    // Si deseas cargar los productos solo una vez al montar el componente, puedes usar useEffect
    // con un array de dependencias vacío.
    useEffect(() => {
        console.log("HOLAAA" + selectedProdId);
        // if (product.images[0].src) {
        //     console.log(product.images[0]);
        //     setimagen(product.images[0]);
        // }
    }, [x]);

    // Maneja el estado de carga y errores
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
                            // La propiedad product.images es un arreglo, por lo que debe especificarse la posición
                            // de la imagen que se desea recuperar.
                            image={prodimg}
                            item="Product"
                            click={setprod}

                        />

                    ))}
                </div>
            </>
            }
        </div>
    );
};

export default Products;


