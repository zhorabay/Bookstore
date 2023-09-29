import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FormBook from './FormBook';
import BookItem from './BookItem';
import { getBookItems } from '../features/book/bookSlice';

const BookContainer = () => {
  const { books, status, error } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <section className="book">
      {
        Object.entries(books).map(([itemId, book]) => (
          Array.isArray(book) && book.map((item) => (
            <BookItem
              key={itemId}
              itemId={itemId}
              title={item.title}
              author={item.author}
              category={item.category}
            />
          ))
        ))
      }
      <footer>
        <FormBook />
      </footer>
    </section>
  );
};

export default BookContainer;
