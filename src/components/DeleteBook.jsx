import React, { Component } from 'react';
import ListBooks from './ListBooks';
import FormBook from './FormBook';

class DeleteBook extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  addBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  removeBook = (id) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book) => book.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <ListBooks books={this.state.books} removeBook={this.removeBook} />
        <FormBook addBook={this.addBook} />
      </div>
    );
  }
}

export default DeleteBook;
