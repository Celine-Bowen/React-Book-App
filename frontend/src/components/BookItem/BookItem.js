import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import './BookItem.css';

const BookItem = ({ book, onAdd }) => {
  return (
    <Card className="card-item"> 
      <CardContent>
        <img className="book-cover" src={`/${book.coverPhotoURL}`} alt={book.title} />
        <Typography variant="h6" className="title">{book.title}</Typography> 
        <Typography variant="subtitle1" className="author">{book.author}</Typography> 
        <Button variant="contained" onClick={() => onAdd(book)} className="button"> 
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookItem;
