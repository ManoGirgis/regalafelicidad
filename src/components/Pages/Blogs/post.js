import React, { Component, useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import Comments from '../Home/Comment/Comment';

const Post = (props) => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(0);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/posts/${props.id}`)
            .then(res => {
                setPost(res.data);
                setId(res.data.id);
            }).catch(err => console.log(err));
    }, [id]);

    return (
        <div>
            <h1>{post.title?.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
        </div>
    )
}
export default Post;