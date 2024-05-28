import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './post';
import Comment from '../Home/Comment/Comment';
import './blogs.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [authors, setAuthors] = useState({});
    const [selectedPostId, setSelectedPostId] = useState(null);

    useEffect(() => {
        const fetchPosts = () => {
            axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/posts`)
                .then(async res => {
                    const posts = res.data;
                    setPosts(posts);

                    const authorIds = [...new Set(posts.map(post => post.author))];
                    const authorRequests = authorIds.map(id => axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/users/${id}`));
                    const authorResponses = await Promise.all(authorRequests);

                    const authors = authorResponses.reduce((acc, res) => {
                        acc[res.data.id] = res.data;
                        return acc;
                    }, {});

                    setAuthors(authors);
                })
                .catch(error => {
                    console.error('Error fetching posts:', error);
                });
        };

        fetchPosts();

        const intervalId = setInterval(fetchPosts, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div>
            {selectedPostId ? (
                <>
                    <Post id={selectedPostId} />
                    <Comment id={selectedPostId} />
                </>
            ) : (
                posts.map(post => (
                    <div key={post.id} className='container-blog'>
                        <span className='info-blog'>Publicado en <u>{formatDate(post.date)}</u> por <b>{authors[post.author]?.name}</b></span>
                        <h1 onClick={() => setSelectedPostId(post.id)} className='header-blog'>{post.title.rendered}  {post.id}</h1>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Blog;
