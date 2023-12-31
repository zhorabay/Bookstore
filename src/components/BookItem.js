import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import prgrs from '../images/prgrs.png';
import { removeBooks, getBookItems } from '../features/book/bookSlice';
import '../styles/BookItem.css';

const BookItem = ({
  itemId, author, title, category,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBooks({ item_id: itemId })).then(() => { dispatch(getBookItems()); });
  };

  return (
    <div className="list-container">
      <div className="description">
        <ul className="book-main">
          <li className="book-id">
            ID:
            {' '}
            {itemId}
          </li>
          <li className="book-category">
            {category}
          </li>
          <li className="book-title">
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
            <button
              type="button"
              onClick={() => handleDelete()}
            >
              Remove
            </button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
      <div className="progress-container">
        <div className="percentage">
          <img src={prgrs} alt="here should be progress" className="img" />
          <div className="percentage-text">
            <p className="number">64%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-display">Chapter 17</p>
          <button type="button" className="list-button">
            UPGRADE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;
