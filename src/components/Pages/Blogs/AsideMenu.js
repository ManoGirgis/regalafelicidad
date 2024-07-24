import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Get_Posts } from './../../../connections/queries';

const AsideMenu = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const { loading, error, data: sidedata } = useQuery(Get_Posts, {
        variables: {
            first: 5,
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = sidedata.posts.edges.map(edge => edge.node);

    return (
        <div className='asidemenu-blogs'>
            <h2>Blogs</h2>
            {posts.map(post => (
                <a key={post.id} onClick={() => setSelectedPostId(post.id)} href={'/' + "posts/" + post.id} className='Blog-linker'>
                    {post.title}
                </a>
            ))}
        </div>
    );
};

export default AsideMenu;
