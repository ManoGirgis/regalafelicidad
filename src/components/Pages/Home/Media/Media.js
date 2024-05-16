import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Media = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchMedia = () => {
            axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/media`)
                .then(res => {
                    setMedia(res.data);
                })
                .catch(error => {
                    console.error('Error fetching Media:', error);
                });
        };

        fetchMedia();

        const intervalId = setInterval(fetchMedia, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Medias</h1>
            {Media.map(medias => (
                <p key={medias.id}>{medias.name}</p>
            ))}

        </div>
    );
}

export default Media;
