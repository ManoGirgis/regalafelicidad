import { useEffect } from "react";
import { useState } from 'react';
import axios from 'axios';

const WoocommerceConnection = (required, rerenders) => {
    const [requireds, setRequireds] = useState([]);
    useEffect(() => {
        const fetchrequireds = async () => {
            const consumerKey = process.env.REACT_APP_WC_CONSUMER_KEY;
            const consumerSecret = process.env.REACT_APP_WC_CONSUMER_SECRET;
            const storeUrl = process.env.REACT_APP_WC_STORE_URL;
            console.log(consumerKey, consumerSecret, storeUrl)
            const url = `${storeUrl}/wp-json/wc/v3/${required}?consumer_key=${consumerKey}&consumer_secret=${consumerSecret}`;

            try {
                const response = await axios.get(url);
                setRequireds(response.data);
            } catch (error) {
                console.error('Error fetching requireds:', error);
            }
        };

        fetchrequireds();
    }, [rerenders]);
    return [requireds];
};
export default WoocommerceConnection;