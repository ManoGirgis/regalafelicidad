import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as res from 'express/lib/response';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = () => {
            axios.get((`${process.env.REACT_APP_WORDPRESS_API_URL}/posts`))
                .then(res => {
                    setPosts(res.data);
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        };

        fetchPosts();

        const intervalId = setInterval(fetchPosts, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {posts.map(post => (
                <>
                    <span>Publicado en <u>{post.date}</u> por  <b>{post.author}</b></span>
                    <h1 key={post.id}>{post.title.rendered}</h1>
                    <p>{post.content.rendered}</p>

                </>
            ))}

        </div>
    );
}

export default Blog;
