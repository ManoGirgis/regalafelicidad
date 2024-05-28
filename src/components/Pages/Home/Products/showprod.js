import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import prodimg from '../../../../Images/prodimg.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navigation from "../../../Common/Navigation";

const Showprod = (props) => {
    let thing = `products/${props.id}`;
    const { data: product, loading, error } = WoocommerceConnection(thing);
    const [imagen, setimagen] = useState(prodimg);
    useEffect(() => {
        // if (product.images[0].src) {
        //     console.log(product.images[0]);
        //     setimagen(product.images[0]);
        // }


    }, []);
    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return (
        <div className="product-details">
            <table>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <div className="product-img-container">
                                <img src={imagen} alt="product-default" />
                            </div>
                        </td>
                    </tr>
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
            <Navigation navi="products" current={product.id} />
        </div>
    );
};
export default Showprod;