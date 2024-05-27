import React, { useEffect, useState } from 'react';
import Card from '../../../Common/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import Showprod from './showprod';
let x = 0;
const Products = () => {
    // Utiliza el hook de tu conexión personalizada
    const { data: products, loading, error } = WoocommerceConnection('products');
    const [selectedProdId, setSelectedProdId] = useState(null);
    // Si deseas cargar los productos solo una vez al montar el componente, puedes usar useEffect
    // con un array de dependencias vacío.
    useEffect(() => {
        console.log(selectedProdId, x);
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
                            // image={product.images[0] ? product.images[0].src : ''}
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


