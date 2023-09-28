import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../styles/FormBook.css';
import { addBooksData } from '../features/book/bookSlice';

const FormBook = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Category',
  });

  setFormData({
    title: '',
    author: '',
    category: 'Category',
  });

  const handleInputChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') {
      setFormData(value);
    } else if (name === 'author') {
      setFormData(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      item_id: uuidv4(),
      title: '',
      author: '',
      category: 'Category',
    };

    dispatch(addBooksData(formData));
  };

  return (
    <div className="form-container">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-flex" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="title"
          placeholder="Book title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          type="text"
          name="author"
          placeholder="Book author"
          value={formData.author}
          onChange={handleInputChange}
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
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
};

export default FormBook;
