import React from 'react';
import styled from 'styled-components';

const PostListContainer = styled.div`
  max-height: calc(100vh - 200px); /* Adjust based on the height of other elements in the sidebar */
  overflow-y: auto;
`;

const PostItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${props => (props.isSelected ? '#ccc' : '#f0f0f0')};
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const PostList = ({ posts, onPostClick, selectedPost }) => {
  return (
    <PostListContainer>
      {posts.map(post => (
        <PostItem
          key={post.id}
          onClick={() => onPostClick(post)}
          isSelected={selectedPost && selectedPost.id === post.id}
        >
          {post.title}
        </PostItem>
      ))}
    </PostListContainer>
  );
};

export default PostList;
