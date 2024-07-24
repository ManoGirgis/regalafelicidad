import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Col, Row, Pagination } from "antd";
import { Get_Posts } from './../../../connections/queries';
import './../../../styles/blogs.css';
import Organizar_fiestas_infantiles_1 from './../../../Images/Posts/Organizar-fiestas-infantiles-1.webp';
import AsideMenu from './AsideMenu';

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const { loading, error, data, fetchMore } = useQuery(Get_Posts, {
        variables: {
            first: pageSize,
            after: null,
            before: null,
        },
        notifyOnNetworkStatusChange: true,
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const posts = data.posts.edges.map(edge => edge.node);

    const handlePageChange = (page) => {
        const isNextPage = page > currentPage;
        setCurrentPage(page);

        if (isNextPage) {
            fetchMore({
                variables: {
                    first: pageSize,
                    after: data.posts.pageInfo.endCursor,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevResult;

                    return {
                        ...fetchMoreResult,
                        posts: {
                            ...fetchMoreResult.posts,
                            edges: [
                                ...fetchMoreResult.posts.edges,
                            ],
                            pageInfo: fetchMoreResult.posts.pageInfo,
                        },
                    };
                },
            });
        } else {
            fetchMore({
                variables: {
                    first: pageSize,
                    before: data.posts.pageInfo.startCursor,
                },
                updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prevResult;

                    return {
                        ...fetchMoreResult,
                        posts: {
                            ...fetchMoreResult.posts,
                            edges: [
                                ...fetchMoreResult.posts.edges,
                            ],
                            pageInfo: fetchMoreResult.posts.pageInfo,
                        },
                    };
                },
            });
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Row gutter={[0, 0]} className='Blog'>
            <Col lg={{ span: 19 }} xs={{ span: 24 }} className='blog-cols'>
                <div>
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <a key={post.id} href={'/' + "posts/" + post.id} className='Blog-linker'>
                                {post.featuredImage ? (
                                    <img src={post.featuredImage.node.sourceUrl} alt="Post" />
                                ) : (
                                    <img src={Organizar_fiestas_infantiles_1} alt="Post" />
                                )}
                                <div className='container-blog'>
                                    <h1 className='header-blog'>{post.title}</h1>
                                    <span className='info-blog'>{formatDate(post.date)} por {post.author.node.name}</span>
                                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                                <hr></hr>
                            </a>
                        ))
                    ) : (
                        <p>No posts available.</p>
                    )}
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={data.posts.pageInfo.hasNextPage ? (currentPage + 1) * pageSize : currentPage * pageSize}
                        onChange={handlePageChange}
                    />
                </div>
            </Col>
            <Col lg={{ span: 1 }} xs={{ span: 0 }} ></Col>
            <Col lg={{ span: 4 }} xs={{ span: 24 }} className='blog-cols'>
                <AsideMenu />
            </Col>
        </Row>
    );
};

export default Blog;
