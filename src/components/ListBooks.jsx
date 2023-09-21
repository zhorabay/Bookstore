import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const ListBooks = ({ books, removeBook }) => {
  if (!books || books.length === 0) {
    return <p className="hidden-p">No books to display</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
          removeBook={removeBook}
        />
      ))}
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default ListBooks;
