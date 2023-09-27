import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  books,
  addBook,
  removeBook,
} from './booksSlice';

export default function DisplayBooks() {
  const count = useSelector(books);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <div>
        <button
          type="button"
          aria-label="Add book"
          onClick={() => dispatch(addBook())}
        >
          Add book
        </button>
        <button
          type="button"
          aria-label="Remove book"
          onClick={() => dispatch(removeBook())}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
