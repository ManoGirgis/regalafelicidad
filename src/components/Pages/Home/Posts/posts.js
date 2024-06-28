import React, { useEffect, useState } from 'react';
import WordpressConnection from '../../../../connections/wordpress';
// import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // const fetchPosts = () => {
        // axios.get((`${process.env.REACT_APP_WORDPRESS_API_URL}/posts`))
        //     .then(res => {
        //         setPosts(res.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching posts:', error);
        //     });


        // };

        // fetchPosts();
        WordpressConnection('posts')
        // const intervalId = setInterval(fetchPosts, 10000);
        const intervalId = setInterval(WordpressConnection, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
