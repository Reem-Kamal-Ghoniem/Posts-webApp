import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <Input
      type="text"
      placeholder="Search posts by title"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};
export default SearchBar;