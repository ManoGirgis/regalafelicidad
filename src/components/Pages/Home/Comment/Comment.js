import React, { useEffect, useState } from "react";
import axios from "axios";

const Comment = (props) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_WORDPRESS_API_URL}/comments?post=${props.id}`);
                setComments(Array.isArray(res.data) ? res.data : []);
            } catch (err) {
                console.error('Error fetching comments:', err);
                setComments([]);
            }
        };

        fetchComments();
    }, [props.id]);

    return (
        <div>
            {comments.map((commento, index) => (
                <div key={index} className="comment-container">
                    <h1>{commento.author_name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: commento.content.rendered }}></p>

                </div>
            ))}
        </div>
    );
};

export default Comment;
