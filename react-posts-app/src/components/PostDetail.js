import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../config';

const PostContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommentsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Comment = styled.li`
  margin-top: 10px;
  padding: 10px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

const PostDetail = ({ post }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`${API_URL}/posts/${post.id}/comments`);
      setComments(response.data);
    };

    fetchComments();
  }, [post.id]);

  return (
    <PostContainer>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <CommentsList>
        {comments.map(comment => (
          <Comment key={comment.id}>{comment.body}</Comment>
        ))}
      </CommentsList>
    </PostContainer>
  );
};

export default PostDetail;
