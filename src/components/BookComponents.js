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

  const itemIds = Object.keys(books);

  return (
    <section className="book">
      {itemIds.map((itemId) => (
        <div key={itemId}>
          <div>
            {books[itemId].map((book) => (
              <BookItem
                key={itemId}
                itemId={itemId}
                title={book.title}
                author={book.author}
                category={book.category}
              />
            ))}
          </div>
        </div>
      ))}
      <footer>
        <FormBook />
      </footer>
    </section>
  );
};

export default BookContainer;
