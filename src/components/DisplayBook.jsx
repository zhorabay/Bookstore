import React, { useState, useEffect } from 'react';
import ListBooks from './ListBooks';
import FormBook from './FormBook';

const DisplayBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div>
      <ListBooks books={books} removeBook={removeBook} />
      <FormBook addBook={addBook} />
    </div>
  );
};

export default DisplayBook;
