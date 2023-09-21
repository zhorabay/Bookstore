import React, { useState, useEffect } from 'react';
import ListBooks from './ListBooks';
import FormBook from './FormBook';

const DisplayBook = () => {
  const [books, setBooks] = useState([
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      category: 'Fantasy',
    },
    {
      title: 'Pride and Prejudice',
      author: 'Author',
      category: 'Classic',
    },
    {
      title: 'Adventurous life',
      author: 'J. Watson',
      category: 'Action',
    },
  ]);

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
