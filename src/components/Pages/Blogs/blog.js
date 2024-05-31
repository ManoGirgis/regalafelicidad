import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './post';
import Comment from '../Home/Comment/Comment';
import './../../../styles/blogs.css'

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
                    <div key={post.id} onClick={() => setSelectedPostId(post.id)} className='container-blog'>
                        <h1 className='header-blog'>{post.title.rendered}</h1>
                        <span className='info-blog'>{formatDate(post.date)} por {authors[post.author]?.name}</span>
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                        <hr></hr>
                    </div>
                ))
            )}
        </div>
    );
}

export default Blog;
