import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../../../Common/Reusables/Card';
import WoocommerceConnection from '../../../../connections/woocommerce';
import WordpressConnection from '../../../../connections/wordpress';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Searched = () => {
    const query = useQuery();
    const searchTerm = query.get('q');
    const [results, setResults] = useState([]);
    const [selectedProdId, setSelectedProdId] = useState();
    // const { data: products, loading, error } = WoocommerceConnection(`products?search=${searchTerm}`);
    // const { data: posts, loadingwb, errorwb } = Wordpress(`search?posts=${searchTerm}`);

    const { data: products, loading, error } = WoocommerceConnection(`products`);
    const { data: posts, loadingwb, errorwb } = WordpressConnection('posts');

    useEffect(() => {
        //     if (products /*|| posts*/) {
        //         setResults([...products/*, ...posts*/]);
        //     }
        //     console.log(results);


    }, [searchTerm]);

    if (loading || loadingwb) {
        return <div>Loading...</div>;
    }

    if (error || errorwb) {
        return <div>Error: {error.message}</div>;
    }

    const filteredprods = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredposts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const setprod = (id) => {
        setSelectedProdId(id);
    }

    return (
        <div>
            <h1>Search Results for: {searchTerm}</h1>
            {filteredprods.length > 0 ? (
                <>
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="">Productos</h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                                {filteredprods.map(product => (
                                    <Card
                                        onClick={() => setSelectedProdId(product.id)}
                                        key={product.id}
                                        id={product.id}
                                        title={product.name}
                                        button="Add to cart"
                                        text={product.price}
                                        unit="Euros"
                                        image={product.images[0]?.src}
                                        imageAlt="Product-image"
                                        item="Product"
                                        click={setprod}
                                    >
                                    </Card>

                                ))}
                            </div>
                        </div>
                    </div>
                </>
                // <li key={product.id}>
                //     {product.name} - {product.price}
                // </li>
            ) : (
                <p>No hay Productos.</p>
            )}
            {filteredposts.length > 0 ? (
                <ul>
                    {filteredposts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay posts.</p>
            )}
        </div>
    );
};

export default Searched;
