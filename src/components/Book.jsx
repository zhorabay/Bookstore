import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  handleRemoveClick = () => {
    const { id } = this.props;
    this.props.removeBook(id);
  };

  render() {
    const {
      id, title, author, category,
    } = this.props;

    return (
      <div className="list-container">
        <div className="description">
          <ul className="book-main">
            <li className="book-id">
              ID:
              {' '}
              {id}
            </li>
            <li className="book-category">
              Category:
              {' '}
              {category}
            </li>
            <li className="book-title">
              Title:
              {' '}
              {title}
            </li>
            <li className="book-author">
              Author:
              {' '}
              {author}
            </li>
          </ul>
          <ul className="book-additional">
            <li>Comments</li>
            <li className="remove-book">
              <button type="button" onClick={this.handleRemoveClick}>Remove</button>
            </li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="percentage">
          <img src="progress" alt="here should be progress" />
          <div className="percentage-text">
            <p className="number">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-display">Chapter 17</p>
          <button type="button" className="list-button">UPGRADE PROGRESS</button>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
