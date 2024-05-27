import React, { useState, useEffect } from "react";
import WoocommerceConnection from '../../../../connections/woocommerce';

const Showprod = ({ id }) => {
    let thing = `products/${id}`;
    const { data: product, loading, error } = WoocommerceConnection(thing);

    useEffect(() => {
        console.log(id)
    }, []);
    if (loading) { return <div>Cargando...</div>; }
    if (error) { return <div>Error: {error.message}</div>; }

    return <div><table>
        <tr>
            <th><img></img></th>
        </tr>
        <tr>
            <td>
                <table>
                    <tr>
                        <th>Name: </th>
                        <th>Price: </th>
                    </tr>
                    <tr> <td>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    </div>;
};
export default Showprod;