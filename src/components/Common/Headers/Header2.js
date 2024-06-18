import React, { useEffect, useState } from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

const Header2 = () => {
    const [carrito, setCarrito] = useState(0)
    const count = JSON.parse(localStorage.getItem('Product')).length
    useEffect(() => {
        setCarrito(count)
    }, [count])


    return (
        <header>
            <nav className='App-header2'>
                <ul className='header-navigators'>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/posts">Entradas</a></li>
                    <li><a href="/prods">Productos</a></li>
                </ul>
                <ul></ul>
                <ul className='header-navigators'>
                    <li></li>
                    <li><a href="/cart" className="button-with-circle"><MdOutlineShoppingBag /></a></li><span className="small-circle">{carrito}</span>
                </ul>
            </nav>
        </header>
    );
}

export default Header2;
