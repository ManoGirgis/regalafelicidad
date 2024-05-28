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
        console.log("EL id del prod es " + props.id)
        // if (product.images[0].src) {
        //     console.log(product.images[0]);
        //     setimagen(product.images[0]);
        // }


    }, []);
    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return <div className="product-details">
        <table>
            <tr>
                <div className="product-img-container">
                    <img src={imagen} alt="product-default" />
                </div>
            </tr>
            <tr>
                <td>
                    <table>
                        <td>
                            <tr>Name: </tr>
                            <tr>Price: </tr>
                            <tr>Describtion: </tr>

                        </td>
                        <td> <tr>{product.name}</tr>
                            <tr>{product.price}</tr>
                            <tr dangerouslySetInnerHTML={{ __html: product.description }} />

                        </td>
                    </table>
                </td>
            </tr>
        </table>
        <Navigation navi="products" current={product.id} />
    </div>;
};
export default Showprod;