import React, { useEffect, useState } from 'react';
import { Get_Posts } from './../../../connections/queries'
import { useQuery } from '@apollo/client'


const AsideMenu = () => {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const { loading, error, data } = useQuery(Get_Posts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='asidemenu-blogs'>
            <h2>Blogs</h2>
            {data.posts.nodes.map(post => (
                <a key={post.id} onClick={() => setSelectedPostId(post.id)} href={'/' + "posts/" + post.id} className='Blog-linker'>
                    {post.title}
                </a>
            ))}

        </div>

    );
};

export default AsideMenu;
