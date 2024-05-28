import React, { Component } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WoocommerceConnection from '../../../src/connections/woocommerce';

const Navigation = (props) => {
    const { data: item, loading, error } = WoocommerceConnection(props.navi);
    if (loading) { return <div>Cargando...</div>; }
    if (error) { alert("Error: " + `${error.message}`) }
    return (
        <div className="button-aligner">
            <a><FaArrowLeft /> Go to the product on the left</a>
            <a>Go to the product on the right <FaArrowRight /></a>
        </div>
    )
}


export default Navigation
