import { useSelector } from 'react-redux';
import FormBook from './FormBook';
import BookItem from './BookItem';

const BookContainer = () => {
  const { booksByItem, isLoading, error } = useSelector((state) => state.book);

  if (isLoading) {
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

  const itemIds = Object.keys(booksByItem);

  return (
    <section className="book">
      {itemIds.map((itemId) => (
        <div key={itemId}>
          <ul>
            {booksByItem[itemId].map((book) => (
              <BookItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
              />
            ))}
          </ul>
        </div>
      ))}
      <footer>
        <hr />
        <FormBook />
      </footer>
    </section>
  );
};

export default BookContainer;
