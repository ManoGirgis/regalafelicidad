import React, { Component, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WoocommerceConnection from '../../../src/connections/woocommerce';
import { useState } from 'react';

const Navigation = (props) => {
    const { data: item, loading, error } = WoocommerceConnection(props.navi);
    const [current, setCurrent] = useState(item)
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();
    useEffect(() => {
        console.log(item);
        if (item && item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                if (item[i].id === props.id) {
                    if (i + 1 < item.length) {
                        setNext(item[i + 1]);
                        console.log(next);
                    } else {
                        setNext(null);
                    }
                    if (i - 1 >= 0) {
                        setPrev(item[i - 1]);
                    } else {
                        setPrev(null);
                    }
                }
            }
        }
    }, [current])

    if (loading) { return <div>Cargando...</div>; }
    if (error) { alert("Error: " + `${error.message}`); }
    return (
        <div className="button-aligner">
            <a><FaArrowLeft /> {/* {prev.name}*/}</a>
            <a> {/* {next.name} */}<FaArrowRight /></a>
        </div>
    )
}


export default Navigation
