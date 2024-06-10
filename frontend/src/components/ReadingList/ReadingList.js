// src/components/ReadingList.js
import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import './ReadingList.css';

// renders a list of books added to the reading list with a remove button to remove it from the list
const ReadingList = ({ readingList, onRemove }) => {
  return (
    <div className="reading-list-container">
      {readingList.map((book) => (
        <Card className="card" key={book.title}>
          <CardContent>
            <img className="book-cover" src={`/${book.coverPhotoURL}`} alt={book.title} />
            <Typography variant="h6" className="title">{book.title}</Typography>
            <Typography variant="subtitle1" className="author">{book.author}</Typography>
            <Button variant="contained" className="button" onClick={() => onRemove(book)}>
              Remove
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReadingList;
