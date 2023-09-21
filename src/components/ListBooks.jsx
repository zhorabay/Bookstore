import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class ListBooks extends Component {
  render() {
    const { books, removeBook } = this.props;

    if (!books || books.length === 0) {
      return <p>No books to display</p>;
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
  }
}

ListBooks.propTypes = {
  books: PropTypes.array,
  removeBook: PropTypes.func.isRequired,
};

export default ListBooks;
