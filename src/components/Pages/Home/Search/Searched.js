import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WoocommerceConnection from '../../../../connections/woocommerce';
import Wordpress from '../../../../connections/wordpress';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Searched = () => {
    const query = useQuery();
    const searchTerm = query.get('q');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchTerm) {

            // WoocommerceConnection(`products?search=${searchTerm}`)
            //     .then(response => setResults(response.data))
            //     .catch(error => console.error(error));

            // Wordpress(`search?posts=${searchTerm}`)
            //   .then(response => setResults(response.data))
            //   .catch(error => console.error(error));
        }
    }, [searchTerm]);

    return (
        <div>
            <h1>Search Results for: {searchTerm}</h1>
            {results.length > 0 ? (
                <ul>
                    {results.map(result => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default Searched;
