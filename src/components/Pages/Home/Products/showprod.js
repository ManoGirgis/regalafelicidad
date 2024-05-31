import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';
import prodimg from '../../../../Images/prodimg.png';
import Navigation from "../../../Common/Navigation";

const Showprod = (props) => {
    const [productId, setProductId] = useState(props.id);
    const [imagen, setimagen] = useState(prodimg);
    // let thing = `products/${productId}`;
    const { data: products, loading, error } = WoocommerceConnection("products");
    const [product, setproduct] = useState({});
    console.log(products)
    useEffect(() => {
        console.log(products)
        // if (product.images[0].src) {
        //     console.log(product.images[0]);
        //     setimagen(product.images[0]);
        // }
        //ss
        if (products && products.length > 0) {
            for (let i = 0; i < products.length; i++) {
                if (products[i].id == productId) {
                    setproduct(products[i]);
                    console.log(products)
                    //    if(products[i].images[0].src){
                    //        setimagen(products[i].images[0].src);
                    //    }
                }
            }
        }
    }, []);
    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    const nextprod = (nextId) => {
        setProductId(nextId);
        reloadpg()
    }
    const prevprod = (prevId) => {
        console.log("prev", prevId);
        setProductId(prevId);
        reloadpg()
    }

    function reloadpg() {
        // forceUpdate()
    }

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
            <Navigation navi="products" current={product.id} right={nextprod} left={prevprod} />
        </div>
    );
};
export default Showprod;