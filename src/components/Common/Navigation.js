import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import WoocommerceConnection from '../../../src/connections/woocommerce';

const Navigation = (props) => {
    // console.log('Navigation props:', props);
    const { data: item, loading, error } = WoocommerceConnection(props.navi);
    // console.log(WoocommerceConnection(props.navi));
    const [next, setNext] = useState(null);
    const [prev, setPrev] = useState(null);

    useEffect(() => {
        if (item && item.length > 0) {
            for (let i = 0; i < item.length; i++) {
                // console.log("holaqqqqqqqqqqqqqqqsssssss")
                // console.log(item[i].id == props.current)
                // console.log(item[i].id + " -- " + props.current)
                if (item[i].id == props.current) {
                    if (i + 1 < item.length) {
                        setNext(item[i + 1]);
                    } else {
                        setNext(null);
                    }
                    if (i - 1 >= 0) {
                        setPrev(item[i - 1]);
                    } else {
                        setPrev(null);
                    }
                    break;
                }
            }
        }
    }, [item, props.id]);

    useEffect(() => {
        console.log('Next item:', next);
        console.log('Previous item:', prev);
    }, [next, prev]);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    // const toprev = () => {
    //     this.props.prev(prev.id);
    // }
    // const tonext = () => {
    //     this.props.next(next.id);
    // }

    return (
        <div className="button-aligner">
            {prev && (
                <div onClick={() => props.left(prev.id)} className="toPrev">
                    <FaArrowLeft /> {prev.name}
                </div>
            )}
            {next && (
                <div onClick={() => props.right(next.id)} className="toNext">
                    <FaArrowRight />{next.name}
                </div>
            )}
        </div>
    );
}

export default Navigation;
