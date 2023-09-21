import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/FormBook.css';

class FormBook extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: 'Category',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = this.state;

    if (title.trim() === '' || category === 'Category') {
      alert('Please fill in all fields');
      return;
    }

    const newBook = {
      id: Math.random().toString(),
      title,
      category,
    };

    this.props.addBook(newBook);

    this.setState({
      title: '',
      category: 'Category',
    });
  };

  render() {
    const { title, category } = this.state;

    return (
      <div className="form-container">
        <h2 className="form-title">ADD NEW BOOK</h2>
        <form className="form-grid" onSubmit={this.handleSubmit}>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Book title"
            value={title}
            onChange={this.handleInputChange}
          />
          <select
            className="form-input"
            name="category"
            value={category}
            onChange={this.handleInputChange}
          >
            <option value="Category">Category</option>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
          <button type="submit" className="form-button">
            ADD BOOK
          </button>
        </form>
      </div>
    );
  }
}

FormBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default FormBook;
