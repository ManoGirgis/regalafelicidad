import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from './../Pages/Blogs/page';
import Empty from './../Common/Empty';
import Products from './../Pages/Home/Products/products';
import Error from './../Common/Empty';
import Aboutus from '../Pages/Informations/aboutus';
import Preguntasfreq from '../Pages/Informations/preguntasfreq';


import React, { Component } from 'react'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/posts" element={<Page />} />
                    <Route path="/prods" element={<Products />} />
                    <Route path="/" element={<Empty />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/aboutus" element={<Aboutus />} />
                    <Route path="/preguntas" element={<Preguntasfreq />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Routing

