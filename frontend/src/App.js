import React, { useState } from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { Container, CssBaseline, Grid, Typography, Button } from '@mui/material';
import SearchBar from './components/Searchbar/SearchBar';
import BookList from './components/BookList/BookList';
import ReadingList from './components/ReadingList/ReadingList';
import './App.css'; 

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const App = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for reading list
  const [readingList, setReadingList] = useState([]);

  // State for active list (book list or reading list)
  const [activeList, setActiveList] = useState('bookList'); 

  // add a book to the reading list
  const handleAddBook = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  // remove a book from the reading list
  const handleRemoveBook = (book) => {
    setReadingList((prevList) => prevList.filter((b) => b.title !== book.title));
  };

  // toggle between book list and reading list
  const handleListToggle = (list) => {
    setActiveList(list);
  };

  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Container className="app">
        <Typography variant="h5" gutterBottom className="appTitle">
          Ello Book Assignment
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </Grid>
          <Grid item xs={12} className="buttonContainer">
            <Button
              variant="contained"
              className={`listButton ${activeList === 'bookList' ? "activeButton" : ''}`}
              onClick={() => handleListToggle('bookList')}
            >
              Book List
            </Button>
            <Button
              variant="contained"
              className={`listButton ${activeList === 'readingList' ? "activeButton" : ''}`}
              onClick={() => handleListToggle('readingList')}
            >
              Reading List
            </Button>
          </Grid>
          <Grid item xs={12}>
            {activeList === 'bookList' && (
              <>
                <Typography variant="h6" gutterBottom className="listTitle">
                  Book List
                </Typography>
                <BookList searchQuery={searchQuery} onAdd={handleAddBook} />
              </>
            )}
            {activeList === 'readingList' && (
              <>
                <Typography variant="h6" gutterBottom className="listTitle">
                  Reading List
                </Typography>
                <ReadingList readingList={readingList} onRemove={handleRemoveBook} />
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </ApolloProvider>
  );
};

export default App;
