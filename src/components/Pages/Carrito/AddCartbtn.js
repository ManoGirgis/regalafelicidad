import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Modal, InputNumber } from "antd";

const AddCartbtn = (props) => {
    const [quantity, setQuantity] = useState(1);

    const ToCart = () => {
        let cart = JSON.parse(localStorage.getItem('Product'));
        if (!Array.isArray(cart)) {
            cart = [];
        }

        const productToAdd = {
            id: props.prod.id,
            name: props.prod.name,
            price: props.prod.price,
            quantity: quantity
        };

        const existingProductIndex = cart.findIndex(item => item.id === productToAdd.id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push(productToAdd);
        }


        console.log(JSON.parse(localStorage.getItem('Product')));

        Modal.success({
            title: 'Product Added',
            content: `${props.prod.name} has been added to your cart.`,
            onOk: () => {
                window.location.reload();
            }
        });
    }

    return (
        <>
            <div className='buy-cart'>
                {/* <tr>
                    <td> */}

                <label for="Quantity">Cantidad: </label>
                <InputNumber
                    id='Quantity'
                    name="Quantity"
                    keyboard
                    size='small'
                    min={1} max={100}
                    defaultValue={1}
                    onChange={value => setQuantity(value)}
                />
                {/* </td>
                    <td> */}
                <button onClick={ToCart} className="centered-icon-button"><FaCartPlus /> Añadir al carrito</button>
                {/* </td>
                </tr> */}
            </div>
        </>
    );
}

export default AddCartbtn;
