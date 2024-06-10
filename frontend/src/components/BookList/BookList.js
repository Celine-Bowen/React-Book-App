import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../../graphql/queries';
import BookItem from '../BookItem/BookItem';
import './BookList.css'; 


// fetch a list of books from a GraphQL query and displays them
const BookList = ({ searchQuery, onAdd }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [displayedBooks, setDisplayedBooks] = useState(10); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredBooks = data.books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const calculateRows = (numBooks, booksPerRow) => {
    return Math.ceil(numBooks / booksPerRow);
  };

  const handleLoadMore = () => {
    const currentRows = calculateRows(displayedBooks, 2);

    if (currentRows >= 2) {
      setDisplayedBooks(displayedBooks + 20);
    } else {
      setDisplayedBooks(displayedBooks + 10);
    }
  };

  return (
    <div>
      <div className="book-list-container"> 
        {filteredBooks.slice(0, displayedBooks).map((book) => (
          <BookItem key={book.title} book={book} onAdd={onAdd} />
        ))}
      </div>
      {calculateRows(displayedBooks, 2) >= 2 && ( 
        <div className="load-more-button">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default BookList;
