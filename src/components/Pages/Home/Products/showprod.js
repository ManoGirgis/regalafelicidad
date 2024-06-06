import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Reusables/Navigation";

const Showprod = (props) => {
    const [productId, setProductId] = useState(props.id);
    const [imagen, setImagen] = useState(prodimg);
    const { data: products, loading, error } = WoocommerceConnection("products");
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (products && products.length > 0) {
            const foundProduct = products.find(p => p.id === productId);
            if (foundProduct) {
                setProduct(foundProduct);
                // if (foundProduct.images && foundProduct.images.length > 0) {
                //     setImagen(foundProduct.images[0].src);
                // } else {
                //     setImagen(prodimg);
                // }
            }
        }
    }, [products, productId]);

    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    const nextProd = (nextId) => {
        setProductId(nextId);
    };

    const prevProd = (prevId) => {
        setProductId(prevId);
    };

    return (
        <div className="product-details">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2" className="tablecoulmnsleft">
                            <div className="product-img-container">
                                <img src={imagen} alt="product-default" />
                            </div>
                        </td>
                        <td className="tablecoulmnsright">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Price:</td>
                                        <td>{product.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Description:</td>
                                        <td dangerouslySetInnerHTML={{ __html: product.description }} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>


            <Navigation navi="products" current={product.id} right={nextProd} left={prevProd} />
        </div >
    );
};
export default Showprod;