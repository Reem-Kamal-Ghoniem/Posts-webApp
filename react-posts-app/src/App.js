import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import { API_URL } from './config';


const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  height: 100vh;
  overflow: hidden;
`;

const PageTitle = styled.h1`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
  padding-right: 10px; /* Add some padding to avoid scrollbar overlap */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  font-size: 24px;
  color: #666;
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`${API_URL}/posts`);
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <AppContainer>
      <PageTitle>Explore Blog Posts</PageTitle>
      <Sidebar>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <PostList
          posts={currentPosts}
          onPostClick={handlePostClick}
          selectedPost={selectedPost}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
          onPageChange={handlePageChange}
        />
      </Sidebar>
      <Content>
        {selectedPost ? (
          <PostDetail post={selectedPost} />
        ) : (
          <WelcomeMessage>Welcome to our Blog posts Website, we have gathered a lot of amazing posts for you. <br></br>Select a post to view details.</WelcomeMessage>
        )}
      </Content>
    </AppContainer>
  );
};

export default App;

