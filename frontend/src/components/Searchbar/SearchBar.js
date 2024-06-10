import React from 'react';
import { TextField } from '@mui/material';
import './SearchBar.css';

// render a search input field using Material-UI's TextField to allow user to enter a search query to filter books
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      className="search-bar"
      label="Search Books"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      InputProps={{
        classes: {
          root: 'input'
        }
      }}
    />
  );
};

export default SearchBar;
