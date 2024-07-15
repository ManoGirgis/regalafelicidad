import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Get_a_Post } from '../../../connections/queries';
import { useQuery } from '@apollo/client';
import Comments from '../Home/Comment/Comment';

const Post = (props) => {
    // const [post, setPost] = useState({});
    // const [id, setId] = useState(0);
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/posts/${props.id}`)
    //         .then(res => {
    //             setPost(res.data);
    //             setId(res.data.id);
    //         }).catch(err => console.log(err));
    // }, [id]);

    const { postId } = useParams();
    const { loading, error, data } = useQuery(Get_a_Post, {
        variables: { id: postId },
    });
    return (
        <div>
            <div className='container-blog'>
                <h1>{data.post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
            </div>
            <div>
                {/* <Comments postId={postId}/> */}
            </div>
        </div>
    )
}
export default Post;