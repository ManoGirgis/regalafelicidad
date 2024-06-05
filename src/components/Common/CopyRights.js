import React from 'react';
import logo from './../../Images/logo.png';
import KidsClusterSinTexto from './../../Images/aboutus/KidsClusterSinTexto.webp';
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { Row, Col } from "antd";

const CopyRights = () => {
    return (
        <footer className='copyrights'>
            <img src={logo} alt="logo" />
            <FaFacebook />
            <FaInstagramSquare />
            <FaYoutube />
            <table>
                <tr>
                    <td>
                        <p> Formamos parte de:</p>
                    </td>
                    <td>
                        <img src={KidsClusterSinTexto}></img>
                    </td>
                </tr>
            </table>

        </footer>
    );
}

export default CopyRights;
