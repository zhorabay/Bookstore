import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/FormBook.css';

const FormBook = ({ addBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Category',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = formData;

    if (title.trim() === '' || category === 'Category') {
      // eslint-disable-next-line
      alert('Please fill in all fields');
      return;
    }

    const newBook = {
      id: Math.random().toString(),
      title,
      category,
    };

    addBook(newBook);

    setFormData({
      title: '',
      category: 'Category',
    });
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
        <select
          className="form-input"
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

FormBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default FormBook;
